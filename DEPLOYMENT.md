# دليل النشر - مؤسسة أعمال المسبح التجارية

## نظرة عامة
هذا دليل شامل لنشر موقع مؤسسة أعمال المسبح التجارية على مختلف منصات الاستضافة.

## خيارات النشر

### 1. Netlify (مُوصى به)

#### الطريقة الأولى: السحب من GitHub
1. ارفع المشروع إلى GitHub
2. اذهب إلى [Netlify](https://netlify.com)
3. اختر "New site from Git"
4. اختر GitHub وحدد المستودع
5. إعدادات البناء:
   - Build command: `npm run build`
   - Publish directory: `build`
6. اضغط "Deploy site"

#### الطريقة الثانية: السحب اليدوي
1. شغل الأمر: `npm run build`
2. اذهب إلى [Netlify](https://netlify.com)
3. اسحب مجلد `build` إلى منطقة "Deploy manually"
4. الموقع سيكون متاحاً فوراً

### 2. Vercel

1. اذهب إلى [Vercel](https://vercel.com)
2. اضغط "New Project"
3. اربط حساب GitHub
4. اختر المستودع
5. إعدادات البناء:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
6. اضغط "Deploy"

### 3. GitHub Pages

1. أضف إلى `package.json`:
   ```json
   "homepage": "https://username.github.io/repository-name"
   ```

2. تثبيت gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. أضف إلى `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. شغل الأمر:
   ```bash
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

1. أنشئ bucket في S3
2. فعّل Static Website Hosting
3. ارفع محتويات مجلد `build`
4. أنشئ توزيع CloudFront
5. اربط النطاق المخصص

## إعدادات مهمة

### متغيرات البيئة
أنشئ ملف `.env` في المجلد الجذر:
```
REACT_APP_SITE_URL=https://aamal.com.sa
REACT_APP_CONTACT_EMAIL=Projects@aamal.com.sa
REACT_APP_PHONE=+966504480025
```

### تحسين الأداء
1. ضغط الصور قبل الرفع
2. تفعيل Gzip compression
3. إعداد Cache headers
4. استخدام CDN

### الأمان
1. تفعيل HTTPS
2. إعداد Security headers
3. تحديث التبعيات بانتظام

## اختبار ما بعد النشر

### اختبارات أساسية
- [ ] الموقع يفتح بشكل صحيح
- [ ] جميع الصفحات تعمل
- [ ] النماذج تعمل
- [ ] الروابط تعمل
- [ ] التصميم متجاوب
- [ ] النصوص العربية تظهر بشكل صحيح

### اختبارات الأداء
- [ ] سرعة التحميل
- [ ] Core Web Vitals
- [ ] اختبار على أجهزة مختلفة

### اختبارات SEO
- [ ] Meta tags
- [ ] Structured data
- [ ] Sitemap
- [ ] Robots.txt

## الصيانة

### تحديثات منتظمة
1. تحديث التبعيات
2. مراجعة الأمان
3. تحسين الأداء
4. تحديث المحتوى

### النسخ الاحتياطية
1. نسخ احتياطية للملفات
2. نسخ احتياطية لقاعدة البيانات (إذا كانت موجودة)
3. توثيق التغييرات

## الدعم الفني

للمساعدة في النشر أو أي استفسارات:
- البريد الإلكتروني: Projects@aamal.com.sa
- الهاتف: +966504480025
- واتساب: [اضغط هنا](https://wa.me/966504480025)

---

**ملاحظة**: تأكد من اختبار الموقع على أجهزة ومتصفحات مختلفة قبل النشر النهائي.

