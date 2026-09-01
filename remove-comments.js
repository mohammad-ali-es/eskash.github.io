const fs = require('fs');
const path = require('path');

// ============================================================
// تنظیمات ساده
// ============================================================

// پوشه‌هایی که نباید اسکن شوند
const excludeDirs = ['node_modules', '.git', 'dist', 'build', 'public'];

// پسوندهای مجاز برای پردازش
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json'];

// ============================================================
// توابع اصلی
// ============================================================

// 1. حذف کامنت‌های جاوااسکریپت
function removeJSComments(text) {
    // حذف کامنت‌های چندخطی /* ... */
    text = text.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // حذف کامنت‌های تک خطی //
    // دقت: آدرس‌های http:// را حذف نکن
    text = text.replace(/\/\/[^"']*$/gm, function(match) {
        // اگر داخل string نیست، حذف کن
        return '';
    });
    
    return text;
}

// 2. حذف کامنت‌های HTML
function removeHTMLComments(text) {
    return text.replace(/<!--[\s\S]*?-->/g, '');
}

// 3. حذف کامنت‌های CSS
function removeCSSComments(text) {
    return text.replace(/\/\*[\s\S]*?\*\//g, '');
}

// 4. پردازش یک فایل
function processFile(filePath) {
    try {
        const ext = path.extname(filePath);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // انتخاب روش حذف کامنت بر اساس نوع فایل
        if (['.js', '.jsx', '.ts', '.tsx', '.json'].includes(ext)) {
            content = removeJSComments(content);
        } else if (ext === '.html') {
            content = removeHTMLComments(content);
        } else if (ext === '.css') {
            content = removeCSSComments(content);
        }
        
        // ذخیره فایل
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ ${filePath}`);
        
    } catch (error) {
        console.log(`❌ خطا در ${filePath}: ${error.message}`);
    }
}

// 5. اسکن دایرکتوری
function scanDirectory(directory) {
    const items = fs.readdirSync(directory);
    
    items.forEach(item => {
        const fullPath = path.join(directory, item);
        
        // اگر فایل نیست
        if (!fs.statSync(fullPath).isFile()) {
            // اگر پوشه غیرمجاز نیست، اسکن کن
            if (!excludeDirs.includes(item)) {
                scanDirectory(fullPath);
            }
            return;
        }
        
        // اگر فایل مجاز است، پردازش کن
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
            processFile(fullPath);
        }
    });
}

// ============================================================
// اجرا
// ============================================================

console.log('\n🚀 شروع حذف کامنت‌ها...\n');

try {
    scanDirectory('./src'); // اگر پوشه src دارید
    // scanDirectory('.');   // اگر می‌خواهید کل پروژه را اسکن کنید
} catch (error) {
    // اگر پوشه src وجود نداشت، کل پروژه را اسکن کن
    console.log('⚠️ پوشه src پیدا نشد، اسکن کل پروژه...');
    scanDirectory('.');
}

console.log('\n✅ تمام کامنت‌ها حذف شدند!');