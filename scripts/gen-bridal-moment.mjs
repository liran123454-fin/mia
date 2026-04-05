import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const API_KEY = '8fd78971274df4ace94bb340037ac6c2'
const BASE_URL = 'https://api.kie.ai'

const OUTPUT_PATH = 'public/bridal-moment.jpg'

const PROMPT = `A hyper-realistic candid photograph inside a bright luxury bridal boutique.
A young woman in her mid-20s wearing a white shirt and dark jeans is standing between
two long racks densely packed with white and ivory wedding dresses. She is browsing
through the gowns with both hands — fingers lightly touching the fabrics as she flicks
through them — and she is smiling naturally, clearly excited and happy.
The dresses on the racks surround her on both sides, creating a beautiful frame of
flowing white fabric. The boutique is airy and bright with soft natural light,
white walls, wooden floors, and a calm elegant atmosphere.
The camera captures her from a slight three-quarter angle so both her face and the
dress racks are clearly visible. Shallow depth of field — she is sharp, the racks
of dresses slightly soft but clearly recognizable as wedding gowns.
Shot on a Canon EOS R5, 50mm f/1.8, natural soft light from the side.
Photojournalistic, candid, warm and joyful mood. Warm ivory and white color grading.
Ensure the racks of wedding dresses are clearly visible on both sides of her.
No mirrors, no posed studio look — purely natural and spontaneous.`

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function apiRequest(method, endpoint, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(BASE_URL + endpoint)
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method,
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    }

    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => (data += chunk))
      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch {
          reject(new Error(`Failed to parse response: ${data}`))
        }
      })
    })

    req.on('error', reject)
    if (body) req.write(JSON.stringify(body))
    req.end()
  })
}

async function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(__dirname, '..', outputPath)
    fs.mkdirSync(path.dirname(fullPath), { recursive: true })
    const file = fs.createWriteStream(fullPath)

    const get = (url) => {
      https.get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          get(res.headers.location)
          return
        }
        res.pipe(file)
        file.on('finish', () => file.close(resolve))
      }).on('error', reject)
    }

    get(url)
  })
}

async function main() {
  console.log('▶ שולח בקשה ל-KIE AI...')

  const createRes = await apiRequest('POST', '/api/v1/jobs/createTask', {
    model: 'nano-banana-2',
    input: {
      prompt: PROMPT,
      aspect_ratio: '3:4',
      resolution: '2K',
      output_format: 'jpg',
    },
  })

  if (createRes.code !== 200) {
    throw new Error(`שגיאה ביצירת משימה: ${JSON.stringify(createRes)}`)
  }

  const taskId = createRes.data.taskId
  console.log(`  taskId: ${taskId}`)
  console.log('  ממתין לתוצאה...')

  for (let i = 0; i < 60; i++) {
    await sleep(5000)
    const statusRes = await apiRequest('GET', `/api/v1/jobs/recordInfo?taskId=${taskId}`)
    const state = statusRes.data?.state

    console.log(`  סטטוס: ${state} (${i + 1}/60)`)

    if (state === 'success') {
      const resultJson = JSON.parse(statusRes.data.resultJson)
      const imageUrl = resultJson.resultUrls[0]
      console.log(`  הורד מ: ${imageUrl}`)
      await downloadImage(imageUrl, OUTPUT_PATH)
      console.log(`\n✓ נשמר ב: ${OUTPUT_PATH}`)
      return
    }

    if (state === 'fail') {
      throw new Error(`יצירה נכשלה: ${statusRes.data.failMsg}`)
    }
  }

  throw new Error('timeout — המשימה לא הסתיימה תוך 5 דקות')
}

main().catch((err) => {
  console.error('✗', err.message)
  process.exit(1)
})
