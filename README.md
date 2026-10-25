# Java Programming Laboratory Record

Website for **R. Prudhviraj** (Roll No. 25EU02113), AIML Section B.
Built with React + Vite.

## Run locally
1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open a terminal in this folder and run:
   ```
   npm install
   npm run dev
   ```
3. Open the address shown in the terminal (usually http://localhost:5173).

## Add your PDFs
Put your real lab PDFs in `public/pdfs/` with these exact names:
`week1.pdf, week2.pdf, week3.pdf, week6.pdf, week7.pdf, week8.pdf, week9.pdf, week10.pdf, week11.pdf, week12.pdf`

The site checks each file automatically. If a file is missing, the card shows
"PDF not added yet." instead of a button. Weeks 4 and 5 never show a PDF button.

## Edit details
Student details and week list: `src/data/labData.js`

## Build for production
```
npm run build
```
The output goes to the `dist/` folder.

## Upload to GitHub
1. Create an account at https://github.com and click **New repository**.
2. Name it `java-laboratory-record`, keep it empty (no README), and click **Create repository**.
3. In your project folder run:
   ```
   git init
   git add .
   git commit -m "Java laboratory record website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/java-laboratory-record.git
   git push -u origin main
   ```
4. Make sure your PDFs are inside `public/pdfs/` before you commit.

## Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and import `java-laboratory-record`.
3. Vercel detects Vite automatically (Build command `npm run build`, Output `dist`).
4. Click **Deploy**. You get a live link in about a minute.
5. To update later, add or change files and run `git add . && git commit -m "update" && git push`. Vercel redeploys automatically.
