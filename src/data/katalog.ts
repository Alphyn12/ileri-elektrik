// Katalog görselleri: anasayfa slaytları ve sayfa başlıkları bu listeden beslenir.
// Görseller Unsplash'ten (telifsiz); kaynaklar src/assets/katalog/KAYNAK.md'de.
// Gerçek fotoğraflar gelince aynı dosya adıyla değiştirmek yeterli.

const files = import.meta.glob<ImageMetadata>('../assets/katalog/*.jpg', { eager: true, import: 'default' });
const img = (name: string): ImageMetadata => {
  const f = files[`../assets/katalog/${name}.jpg`];
  if (!f) throw new Error(`Katalog görseli yok: ${name}`);
  return f;
};

export type Kategori = 'avize' | 'ic' | 'dis';

export interface KatalogGorsel {
  src: ImageMetadata;
  alt: string;
  kategori: Kategori;
}

const g = (name: string, kategori: Kategori, alt: string): KatalogGorsel => ({ src: img(name), alt, kategori });

export const gorseller = {
  'dis-01': g('dis-01', 'dis', 'Tuğla duvarda aşağı ve yukarı ışık veren kare dış cephe apliği'),
  'dis-02': g('dis-02', 'dis', 'Sıva duvarda yanan klasik fener aplik'),
  'dis-03': g('dis-03', 'dis', 'Beton duvarda siyah silindir dış mekân apliği'),
  'dis-04': g('dis-04', 'dis', 'Tuğla duvarı sıcak ışıkla yıkayan yuvarlak aplik'),
  'dis-05': g('dis-05', 'dis', 'Tuğla duvarda yanan siyah fener aplik'),
  'dis-06': g('dis-06', 'dis', 'Karanlık duvarda kademeli ışık veren modern aplik'),
  'dis-07': g('dis-07', 'ic', 'Duvara yukarı ve aşağı ışık veren yarım ay aplik'),
  'dis-08': g('dis-08', 'dis', 'Bahçe toprağını aydınlatan alçak bahçe armatürü'),
  'dis-09': g('dis-09', 'dis', 'Ağaçların arasında yanan bahçe armatürleri'),
  'dis-10': g('dis-10', 'dis', 'Yeşil bitkiler arasında ince modern bahçe direği'),
  'dis-11': g('dis-11', 'dis', 'Çiçek tarhını aydınlatan bahçe armatürü'),
  'dis-12': g('dis-12', 'dis', 'Gece ışıklandırılmış ağaçlı bahçe yolu'),
  'dis-13': g('dis-13', 'dis', 'Taş sütun üzerinde siyah bahçe feneri'),
  'dis-14': g('dis-14', 'dis', 'Bina cephesinde yanan fener aplik'),
  'dis-15': g('dis-15', 'dis', 'Işık çizgileriyle aydınlatılmış modern bina cephesi'),
  'dis-16': g('dis-16', 'ic', 'Duvarda ışık desenleri oluşturan modern aplikler'),
  'dis-17': g('dis-17', 'dis', 'Tuğla duvara sıcak ışık veren aplik'),
  'dis-18': g('dis-18', 'dis', 'Çimenlikte yanan küre bahçe armatürleri'),
  'ic-01': g('ic-01', 'ic', 'Kaymaktaşı görünümlü yanan duvar apliği'),
  'ic-02': g('ic-02', 'avize', 'Pirinç gövdeli, yanan kristal avize'),
  'ic-03': g('ic-03', 'avize', 'Salonda yanan büyük kristal avizeler'),
  'ic-04': g('ic-04', 'avize', 'Mum ampullü kristal avize'),
  'ic-05': g('ic-05', 'avize', 'Sıcak ışıkta yanan kristal avize'),
  'ic-06': g('ic-06', 'avize', 'Kristal sarkıtlı avize, yakın plan'),
  'ic-07': g('ic-07', 'avize', 'Kubbe biçimli tavan lambası ve kristal sarkıtlar'),
  'ic-08': g('ic-08', 'avize', 'Cam küre sarkıtlı avize'),
  'ic-09': g('ic-09', 'ic', 'Bakır renkli sarkıt lambalar'),
  'ic-10': g('ic-10', 'ic', 'Koyu duvar önünde siyah sarkıt lamba'),
  'ic-11': g('ic-11', 'ic', 'Farklı boylarda sarkıt ampul avizeler'),
  'ic-12': g('ic-12', 'ic', 'Tavanda yüzlerce yanan ampul'),
  'ic-13': g('ic-13', 'ic', 'Koyu duvarda çizgisel LED aydınlatma'),
  'ic-14': g('ic-14', 'ic', 'Gizli ışıkla aydınlatılmış modern oturma alanı'),
} satisfies Record<string, KatalogGorsel>;

export type GorselAdi = keyof typeof gorseller;

/**
 * Anasayfa slaytları. Her slayt bir katalog sayfası gibi 6 görsellik bir kolaj.
 * "a" düzeni: sol iki kare, ortada uzun, sağda iki kare ve altında geniş.
 * "b" düzeni: solda uzun, ortada iki kare, sağda geniş ve altında iki kare.
 */
export const slaytlar: { baslik: string; duzen: 'a' | 'b'; gorseller: GorselAdi[] }[] = [
  { baslik: 'Dış cephe aplikleri', duzen: 'a', gorseller: ['dis-01', 'dis-04', 'dis-05', 'dis-03', 'dis-06', 'dis-14'] },
  { baslik: 'Avize', duzen: 'b', gorseller: ['ic-04', 'ic-02', 'ic-06', 'ic-03', 'ic-05', 'ic-07'] },
  { baslik: 'Bahçe ve peyzaj aydınlatması', duzen: 'a', gorseller: ['dis-13', 'dis-11', 'dis-08', 'dis-10', 'dis-12', 'dis-18'] },
  { baslik: 'İç mekân aydınlatma', duzen: 'b', gorseller: ['ic-14', 'ic-10', 'ic-01', 'ic-12', 'ic-09', 'ic-08'] },
];

