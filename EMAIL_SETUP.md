# راهنمای تنظیم ارسال ایمیل

برای فعال‌سازی ارسال ایمیل از طریق Gmail، مراحل زیر را دنبال کنید:

## 1. ایجاد App Password در Gmail

1. به [Google Account Settings](https://myaccount.google.com/) بروید
2. بخش **Security** را باز کنید
3. **2-Step Verification** را فعال کنید (اگر فعال نیست)
4. به **App Passwords** بروید
5. یک App Password جدید برای "Mail" ایجاد کنید
6. رمز ایجاد شده را کپی کنید (16 کاراکتر)

## 2. تنظیم متغیرهای محیطی

یک فایل `.env.local` در ریشه پروژه ایجاد کنید و مقادیر زیر را اضافه کنید:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
RECEIVER_EMAIL=your-email@gmail.com
```

**نکات مهم:**
- `GMAIL_USER`: آدرس ایمیل Gmail شما
- `GMAIL_APP_PASSWORD`: App Password که از Google دریافت کردید (نه رمز عبور عادی)
- `RECEIVER_EMAIL`: ایمیل دریافت‌کننده (می‌تواند همان GMAIL_USER باشد)

## 3. راه‌اندازی

پس از تنظیم متغیرهای محیطی، سرور را ری‌استارت کنید:

```bash
npm run dev
```

## 4. تست

فرم تماس را پر کنید و ارسال کنید. اگر همه چیز درست تنظیم شده باشد، ایمیل به آدرس `RECEIVER_EMAIL` ارسال می‌شود.

## عیب‌یابی

اگر ایمیل ارسال نمی‌شود:
1. مطمئن شوید که 2-Step Verification فعال است
2. App Password را دوباره بررسی کنید
3. Console را برای خطاها بررسی کنید
4. مطمئن شوید که فایل `.env.local` در ریشه پروژه است

