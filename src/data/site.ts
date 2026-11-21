// Tek kaynak: işletme bilgileri. Site, schema ve Google profili aynı bilgileri kullanmalı (NAP tutarlılığı).

export const business = {
  name: 'İleri Elektrik',
  brand: 'İleri Elektrik & Aydınlatma',
  instagram: 'https://www.instagram.com/ilerielektrik20/',
  founded: 1997,
  url: 'https://www.ilerielektrik.com.tr',
  email: 'info@ilerielektrik.com.tr',
  phones: [
    { label: '0533 200 75 97', tel: '+905332007597' },
    { label: '0258 265 36 63', tel: '+902582653663' },
    { label: '0258 263 96 11', tel: '+902582639611' },
  ],
  whatsapp: { label: '0533 200 75 97', number: '905332007597' },
  address: {
    street: 'Topraklık Mah. 619. Sk. No:15',
    district: 'Pamukkale',
    city: 'Denizli',
    postalCode: '20150',
    country: 'TR',
  },
  geo: { lat: 37.7817309, lng: 29.0908937 },
  googleMapsUrl: 'https://maps.google.com/?cid=10146240697950477800',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=%C4%B0leri+Elektrik%2C+619.+Sk.+No%3A15%2C+Pamukkale%2C+Denizli',
  mapEmbedUrl:
    'https://www.google.com/maps?q=%C4%B0leri+Elektrik,+Toprakl%C4%B1k,+619.+Sk.+No:15,+Pamukkale,+Denizli&z=17&output=embed',
  rating: { value: 4.8, count: 48 },
  hours: [
    { days: 'Pazartesi – Cumartesi', open: '08:00', close: '20:00', schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] },
    { days: 'Pazar', open: null, close: null, schemaDays: [] },
  ],
} as const;

export const fullAddress = `${business.address.street}, ${business.address.district} / ${business.address.city}`;

/** WhatsApp linki: mesaj hazır yazılı gelir, müşteri sadece "gönder"e basar. */
export function wa(message: string): string {
  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: 'Merhaba, web sitenizden ulaşıyorum. Bilgi almak istiyorum.',
  photo: 'Merhaba, evimin/iş yerimin fotoğrafını göndereceğim. Aydınlatma için önerinizi almak istiyorum.',
  teklif: 'Merhaba, malzeme listemi gönderip teklif almak istiyorum.',
};

export const nav = [
  { href: '/', label: 'Ana sayfa' },
  { href: '/hakkimizda/', label: 'Hakkımızda' },
  { href: '/hizmetlerimiz/', label: 'Hizmetlerimiz' },
  { href: '/iletisim/', label: 'İletişim' },
];

// Google Haritalar'daki gerçek müşteri yorumları: yalnızca yazım ve noktalama düzeltildi.
// Olumsuz yorumlar, metinsiz puanlar ve işletme sahibinin ailesine ait yorumlar alınmadı.
export const reviews: { name: string; text: string }[] = [
  { name: 'Hamza B.', text: 'İlgileri ve güler yüzleri için çok teşekkür ederiz. Çok kaliteli, çok güzel avizeler var; seçmekte zorlandık ama yine de bizimle sabırla ilgilendiler. Tekrardan teşekkürler.' },
  { name: 'Zelal S.', text: 'Birçok yeri gezmeme rağmen aradığım ürünü, kaliteyi ve ilgiyi burada buldum. Tavsiye ederim, Serhat Bey’e ve ekibine çok teşekkür ederim. Avize, elektrik malzemesi ve dekorasyon açısından herkese hitap eden geniş bir ürün yelpazesi var.' },
  { name: 'Ali Y.', text: 'İşletmeci Metin Usta ve çalışanları müşteriyle ilgili, alakaları güzel, işi biliyorlar. Kısacası meslekte çözüm noktası.' },
  { name: 'İlkay S.', text: 'Evimizin elektrik malzemeleri ve dekorasyon avizesi için eşimle gelmiştik. Gerçekten Denizli’de gidilebilecek en ilgili, en geniş kapsamlı yerlerden biri. Herkese tavsiye ediyorum; ilginiz ve ürünlerinizin kalitesi için teşekkür ederim.' },
  { name: 'Emir C.', text: 'Serhat Bey ve ekibine ilgilerinden dolayı teşekkür ederim.' },
  { name: 'Zehra K.', text: 'İleri Elektrik’ten avize aldım, gelip taktılar. İlgi ve alakalarından çok memnun kaldım. Çözüm odaklıydılar, hiç uğraştırmadan en iyi şekilde kurup gittiler. Kendilerine çok teşekkür ediyorum, herkese tavsiye ederim. İleri Elektrik farkını görmenizi isterim.' },
  { name: 'Efe', text: 'Elektrikle ilgili tüm malzemeleri rahatlıkla alabileceğiniz bir yer. Fiyat olarak da çok uygun. Çoğu yerde fiyatı daha yüksek olan malzemeleri buradan çok daha uygun bir fiyata alabilirsiniz.' },
  { name: 'Ayten', text: 'Kızlarımın odası için avize almaya gelmiştim. Yönlendirmeleri, ilgileri ve aldığım ürünün kalitesi çok iyiydi. Çok teşekkür ederim.' },
  { name: 'Orçun Ö.', text: 'Hızlı, temiz ve güzel işçilik. Aksesuar ve avize çeşitleri çok fazla. Her sorununuza çözüm buluyorlar. Denizli’nin en iyi elektrikçisi.' },
  { name: 'Sude K.', text: 'Evimin bütün avizelerini buradan alıyorum, çok memnunum. Şiddetle tavsiye ediyorum.' },
  { name: 'Ümit K.', text: 'Elektrik sektöründe faaliyet gösteren değerli bir firma.' },
  { name: 'Erkan S.', text: 'Aile apartmanımızın tüm elektrik ve avize ihtiyacını buradan karşıladık. Çok ilgiliydiler; Metin Usta’ya ve oğlu Serhat Bey’e çok teşekkür ederiz.' },
  { name: 'M. Kazım M.', text: 'Avize seçiminde çok yardımcı oldular. Avizeler çok şık oldu. Hızlı, temiz ve kaliteli montaj için Serhat Bey’e çok teşekkür ederiz.' },
  { name: 'Elif Ç.', text: 'İhtiyaç hâlinde aklıma gelen ilk yer. Yine aldığım üründen çok memnun kaldım. Çalışanların güler yüzlülüğünden de ayrıca memnun kaldığımı söyleyebilirim.' },
  { name: 'Nurcan Ç.', text: 'Evimde çok fazla eksik vardı. Serhat Bey ve tüm İleri Elektrik ekibi hem işletmelerinde hem de evimde montaj sırasında çok ilgiliydi; doğru yönlendirmeyle hallettik. Çok teşekkür ederim.' },
  { name: 'Zafer Ç.', text: 'Her şey kaliteli ve güzel, ilginiz de çok ayrıydı. Serhat Bey’e teşekkür ederim.' },
  { name: 'Berkay Ö.', text: 'Yeni aldığımız evimiz için eşimle gelmiştik, çok memnun kaldık. Eve gelip yaptıkları hizmet için de ayrıca teşekkür ederim.' },
  { name: 'Ali A.', text: 'On numara bir firmadır. Firma sahipleri işinin ehli insanlardır.' },
  { name: 'Ayşenur K.', text: 'Çok yardımcı oldular, çok ilgililer. Montaj falan olsun, tavsiye ederim.' },
  { name: 'Feriştahnur G.', text: 'Gayet iyi bir işletme, güler yüzlü işletme sahipleri. Teşekkürler.' },
];
