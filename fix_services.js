const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/services');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import
  if (!content.includes('heroImage')) {
    content = content.replace(
      'import { SEO } from "@/components/SEO";',
      'import { SEO } from "@/components/SEO";\nimport heroImage from "@/assets/hero-visual.png";'
    );
  }

  // Update layout and change max-w-3xl to max-w-2xl
  let updatedContent = content;
  
  // Find container block start
  const containerRegex = /(<div className="container mx-auto px-[^"]+ relative z-10 [^"]+">\s*)<div className="max-w-3xl">/g;
  updatedContent = updatedContent.replace(containerRegex, '$1<div className="grid lg:grid-cols-2 gap-12 items-center">\n          <div className="max-w-2xl">');

  // Find the end of the max-w-2xl block which is just before the ending of container and section
  // Typically it looks like this:
  //           </motion.div>
  //         </div>
  //       </div>
  //     </section>
  const insertRegex = /([ \t]*)(<\/div>\s*<\/div>\s*<\/section>)/;
  updatedContent = updatedContent.replace(insertRegex, 
`$1</div>
$1  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block relative">
$1    <img src={heroImage} alt="Service Visual" className="w-full max-w-lg mx-auto object-contain" />
$1  </motion.div>
$1</div>
      </div>
    </section>`);

  fs.writeFileSync(filePath, updatedContent);
  console.log('Updated', file);
}
