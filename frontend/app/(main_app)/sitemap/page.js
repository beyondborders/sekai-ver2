import Link from "next/link";

export default function Sitemap() {
  return (
    <div>
      <h1 className="text-center py-4">サイトマップ</h1>
      <div className="container py-4">
        <ul>
          <li><Link href="/">TOP</Link></li>
          <li><Link href="/search">物件検索</Link></li>
          <li><Link href="/about-sekai">セカイプロパティとは</Link></li>
          <li>
            <Link href="/library">海外不動産ガイド</Link>
            <ul>
              <li><Link href="/library">全て</Link></li>
              <li><Link href="/global/malaysia-guide">マレーシア</Link></li>
              <li><Link href="/global/philippines-guide">フィリピン</Link></li>
              <li><Link href="/global/cambodia-guide">カンボジア</Link></li>
              <li><Link href="/global/thailand-guide">タイ</Link></li>
              <li><Link href="/global/vietnam-guide">ベトナム</Link></li>
              <li><Link href="/global/dubai-guide">ドバイ</Link></li>
              <li><Link href="/global/america-guide">アメリカ</Link></li>
              <li><Link href="/global/hawaii-guide">ハワイ</Link></li>
              <li><Link href="/global/mongol-guide">モンゴル</Link></li>
            </ul>
          </li>
          <li><Link href="/property_materials">おすすめ物件資料</Link></li>
          <li>
            <Link href="/article">コラム</Link>
            <ul>
              <li><Link href="/article">全て</Link></li>
              <li><Link href="/article/malaysia">マレーシア</Link></li>
              <li><Link href="/article/philippines">フィリピン</Link></li>
              <li><Link href="/article/cambodia">カンボジア</Link></li>
              <li><Link href="/article/thailand">タイ</Link></li>
              <li><Link href="/article/vietnam">ベトナム</Link></li>
              <li><Link href="/article/dubai">ドバイ</Link></li>
              <li><Link href="/article/united-states">アメリカ</Link></li>
              <li><Link href="/article/asset-management">資産運用</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/news">NEWS</Link>
            <ul>
              <li><Link href="/news">全て</Link></li>
              <li><Link href="/news/malaysia">マレーシア</Link></li>
              <li><Link href="/news/philippines">フィリピン</Link></li>
              <li><Link href="/news/cambodia">カンボジア</Link></li>
              <li><Link href="/news/thailand">タイ</Link></li>
              <li><Link href="/news/vietnam">ベトナム</Link></li>
              <li><Link href="/news/united-states">アメリカ</Link></li>
            </ul>
          </li>
          <li><Link href="/interview">オーナー様の声</Link></li>
          <li><Link href="/seminar">海外不動産セミナー</Link></li>
          <li>
            <Link href="/search/malaysia">マレーシア 物件一覧</Link>
            <ul>
              <li><Link href="/search/malaysia/kuala-lumpur">クアラルンプール</Link></li>
              <li><Link href="/search/malaysia/johor">ジョホール</Link></li>
              <li><Link href="/search/malaysia/penang">ペナン</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/search/vietnam">ベトナム 物件一覧</Link>
            <ul>
              <li><Link href="/search/vietnam/hanoi">ハノイ</Link></li>
              <li><Link href="/search/vietnam/ho-chi-minh-city">ホーチミン</Link></li>
              <li><Link href="/search/vietnam/da-nang">ダナン</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/search/thailand">タイ 物件一覧</Link>
            <ul>
              <li><Link href="/search/thailand/bangkok">バンコク</Link></li>
              <li><Link href="/search/thailand/chonburi">チョンブリ</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/search/cambodia">カンボジア 物件一覧</Link>
            <ul>
              <li><Link href="/search/thailand/phnom-penh">プノンペン</Link></li>
            </ul>
          </li>
          <li><Link href="/contact-ja">お問い合わせ</Link></li>
          <li><a href="http://beyondborders.jp/ja/">会社概要</a></li>
          <li><Link href='/ja_terms-privacypolicy'>利用規約</Link></li>
          <li><Link href='/ja_terms-privacypolicy#privacy-policy'>個⼈情報の取り扱いについて</Link></li>
          <li><Link href='/sitemap'>サイトマップ</Link></li>


        </ul>
      </div>
    </div>
  )
}