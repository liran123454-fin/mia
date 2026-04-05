import fs from 'fs'
import path from 'path'
import https from 'https'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const API_KEY = process.env.KIE_API_KEY
const BASE_URL = 'https://api.kie.ai'

const DRESSES = [
  {
    id: 'minimal-3',
    name: 'מָיָה',
    outputPath: 'public/images/gallery/minimal/dress-3.jpg',
    prompt: `Generate a hyper-realistic editorial bridal photograph for a minimalist luxury fashion campaign.
The bride is wearing a sleek wedding gown in smooth heavy crepe fabric — completely plain with zero lace or embellishment.
The most striking design detail is a column of small, delicate fabric-covered buttons running all the way down the center back,
from the neckline to the hem. The back of the dress is the hero of the image — photograph the bride from behind or in a
three-quarter back view so the buttons are clearly visible. The silhouette is slim and elegant, pooling slightly at the floor.
The bride's hair is swept up in a clean chignon to expose the full button detail on the back.
Background is a smooth warm-white plaster wall. Lighting: large softbox from the upper left,
creating soft directional shadows that sculpt the fabric texture and make each button cast a tiny shadow.
Shot on a Hasselblad 90mm f/2.8. Cool, desaturated color grade — platinum whites and soft grays.
Ultra sharp on the button details. No flowers, no lace, no ornamentation. Ensure every button is individually visible and sharp.`,
  },
  {
    id: 'princess-2',
    name: 'רוֹזָה',
    outputPath: 'public/images/gallery/princess/dress-2.jpg',
    prompt: `Generate a hyper-realistic editorial bridal photograph for a grand luxury princess bridal collection.
The bride is wearing a magnificent ballgown with an extraordinarily full and voluminous skirt made of layered duchess satin,
creating a dramatic royal silhouette. The gown has a long sweeping train — at least 2 meters — spread dramatically behind her.
The bodice is structured and strapless, with heavy embroidered beadwork in silver and ivory. The bride stands at the top of
a wide marble staircase or in a grand palatial interior, the train cascading down the steps below her.
Her posture is regal and commanding, chin slightly raised. She wears long white gloves and a cathedral veil.
Lighting: grand chandelier ambient light mixed with a key beauty dish from the front,
creating luminous highlights on the satin and sparkling reflections on the beadwork.
Shot on a medium format Phase One camera, 80mm f/2.8. The satin should appear rich and heavy, with deep folds and highlights.
Warm champagne and ivory color grading. Ultra sharp on the bodice embroidery and satin texture.
Ensure the full drama of the train and skirt volume is captured — this is a statement royal gown.`,
  },
  {
    id: 'princess-3',
    name: 'גָּלִיל',
    outputPath: 'public/images/gallery/princess/dress-3.jpg',
    prompt: `Generate a hyper-realistic editorial bridal photograph for an opulent princess bridal collection.
The bride is wearing a romantic princess ballgown with an off-shoulder neckline — the sleeves sit just below the shoulders,
creating a wide elegant décolletage. The entire gown — bodice and full skirt — is covered in intricate French Chantilly lace
layered over silk underneath, giving depth and texture. The skirt is full and structured but not as extreme as a ball gown —
refined princess volume. The lace pattern features delicate floral motifs that are clearly visible on both bodice and skirt.
The bride stands in a bright, elegant interior — pale stone or cream walls suggesting a French château.
Her hair is in a soft romantic updo with a few loose tendrils. Expression: serene and graceful.
Lighting: natural window light from the right mixed with a subtle beauty dish fill, creating soft shadows that reveal
the three-dimensional texture of the lace. Shot on Hasselblad H6D, 90mm f/2.5, shallow depth of field.
Warm ivory color grading with a slight film softness. Every lace detail on the off-shoulder neckline must be razor sharp.
No harsh shadows on the lace — preserve all the delicate texture.`,
  },
  {
    id: 'boho-2',
    name: 'פְּלוֹרָה',
    outputPath: 'public/images/gallery/boho/dress-2.jpg',
    prompt: `Generate a hyper-realistic editorial bridal photograph for a bohemian luxury wedding collection.
The bride is wearing a flowing chiffon wedding dress in soft ivory, with a weightless, ethereal quality.
The defining feature is hand-embroidered floral motifs scattered across the bodice and upper skirt —
delicate wildflowers in thread work, each petal individually stitched, in ivory and blush tones.
The skirt is multi-layered chiffon that moves and floats with the slightest breeze.
The bride stands in a wildflower meadow or open field at golden hour, surrounded by tall grass and soft blossoms.
Her hair is loose and wavy with fresh wildflowers woven through it naturally.
She holds a loose, unstructured bridal bouquet of garden flowers and eucalyptus.
Her expression is joyful and free — caught mid-movement, the chiffon skirt floating slightly.
Lighting: warm golden hour backlight creating a soft halo around her silhouette, with a reflector adding
warm fill to her face. Shot on Sony A7R V, 85mm f/1.8. The embroidery details must remain sharp despite the movement.
Warm golden color grade. No studio feel — this must feel like an outdoor editorial in natural light.
Ensure the hand-embroidered flowers are clearly distinguishable from the background chiffon.`,
  },
  {
    id: 'boho-3',
    name: 'יַעֲרָה',
    outputPath: 'public/images/gallery/boho/dress-3.jpg',
    prompt: `Generate a hyper-realistic editorial bridal photograph for a free-spirited bohemian bridal collection.
The bride is wearing a romantic boho wedding dress with a dramatic deep open back — the back plunges to just above the waist,
revealing the spine, with delicate straps crossing over the open back. Along the hemline and sleeve edges,
there are delicate raw-edge fringe details — subtle, refined fringe in the same ivory fabric, about 5cm long, not costume-like.
The silhouette is relaxed and flowing, slightly A-line. The fabric appears soft and natural — perhaps silk organza or soft tulle.
The bride is photographed from behind in a forest clearing or near ancient stone ruins, surrounded by dappled natural light.
Her hair is down in long loose waves falling over the open back, pulled slightly aside to reveal the back detail and fringe.
Lighting: dappled forest light or soft overcast natural light that illuminates the open back and fringe details evenly.
Shot on Hasselblad, 85mm f/2.2. The fringe details and open back crossing straps must be razor sharp.
Warm earthy color grade — greens and ivories. No artificial light, no studio backdrop.
The open back must be the undisputed focal point of the composition.`,
  },
]

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

async function generateDress(dress) {
  console.log(`\n▶ מייצר: ${dress.name}`)

  const createRes = await apiRequest('POST', '/api/v1/jobs/createTask', {
    model: 'nano-banana-2',
    input: {
      prompt: dress.prompt,
      aspect_ratio: '3:4',
      resolution: '2K',
      output_format: 'jpg',
    },
  })

  if (createRes.code !== 200) {
    throw new Error(`שגיאה ביצירת משימה: ${createRes.msg}`)
  }

  const taskId = createRes.data.taskId
  console.log(`  taskId: ${taskId}`)

  // Polling
  for (let i = 0; i < 60; i++) {
    await sleep(5000)
    const statusRes = await apiRequest('GET', `/api/v1/jobs/recordInfo?taskId=${taskId}`)
    const state = statusRes.data?.state

    console.log(`  סטטוס: ${state} (${i + 1}/60)`)

    if (state === 'success') {
      const resultJson = JSON.parse(statusRes.data.resultJson)
      const imageUrl = resultJson.resultUrls[0]
      console.log(`  הורד מ: ${imageUrl}`)
      await downloadImage(imageUrl, dress.outputPath)
      console.log(`  נשמר ב: ${dress.outputPath}`)
      return dress.outputPath
    }

    if (state === 'fail') {
      throw new Error(`יצירה נכשלה: ${statusRes.data.failMsg}`)
    }
  }

  throw new Error(`timeout — המשימה לא הסתיימה תוך 5 דקות`)
}

async function main() {
  if (!API_KEY) {
    console.error('שגיאה: KIE_API_KEY חסר. הרץ עם: KIE_API_KEY=... node scripts/generate-images.mjs')
    process.exit(1)
  }

  console.log(`מייצר ${DRESSES.length} שמלות...`)

  const results = []
  for (const dress of DRESSES) {
    try {
      const outputPath = await generateDress(dress)
      results.push({ name: dress.name, id: dress.id, outputPath, success: true })
    } catch (err) {
      console.error(`  ✗ שגיאה ב-${dress.name}: ${err.message}`)
      results.push({ name: dress.name, id: dress.id, success: false, error: err.message })
    }
  }

  console.log('\n\n=== סיכום ===')
  for (const r of results) {
    if (r.success) {
      console.log(`  ✓ ${r.name} → ${r.outputPath}`)
    } else {
      console.log(`  ✗ ${r.name} — ${r.error}`)
    }
  }
}

main()
