# Körfez Akademi Spor Kulübü web sitesi

Körfez Voleybol Akademisi için hazırlanmış, mobil uyumlu ve GitHub Pages üzerinde yayınlanmaya hazır statik tanıtım sitesi.

## Yerel ön izleme

Dosyaları bir yerel web sunucusuyla açın. Örneğin Python kuruluysa proje klasöründe:

```bash
python -m http.server 8080
```

Ardından `http://localhost:8080` adresini açın.

## GitHub Pages yayını

1. Bu klasörün içeriğini yeni bir GitHub deposunun ana dizinine yükleyin.
2. Varsayılan dal adının `main` olduğundan emin olun.
3. GitHub'da **Settings → Pages → Build and deployment → Source** alanından **GitHub Actions** seçeneğini seçin.
4. `main` dalına yapılan her gönderim siteyi otomatik yayınlar.

Site, proje deposu altında (`kullanici.github.io/depo-adi/`) çalışacak şekilde göreli dosya yolları kullanır.

## İçerik güncelleme

- Metin ve bağlantılar: `index.html`
- Ana görünüm: `styles.css`
- Logo renkleri ve marka katmanı: `brand.css`
- Mobil menü ve geçişler: `app.js`
- Logo: `assets/korfez-akademi-logo.svg`

Telefon, WhatsApp, adres ve sezon başarıları yayın öncesinde kulüp yönetimi tarafından son kez doğrulanmalıdır.
