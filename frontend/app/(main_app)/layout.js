import Footer from "@/components/Footer/Footer";
import FooterMenu from "@/components/Footer/FooterMenu";
import Header from "@/components/Header/Header";

export const metadata = {
  title: '【セカイプロパティ】日本最大級の海外不動産情報サイト',
  description: 'SEKAI PROPERTYは日本人が購入可能な海外のおすすめ不動産を集めた越境不動産投資・検索ポータルサイトです。マレーシア・ベトナム・フィリピン・タイ・カンボジアなどアジアの高利回り物件を多数掲載。マンション・コンドミニアム・一戸建てなど完全網羅。',
  openGraph: {
    title: '【セカイプロパティ】日本最大級の海外不動産情報サイト',
    description: 'SEKAI PROPERTYは日本人が購入可能な海外のおすすめ不動産を集めた越境不動産投資・検索ポータルサイトです。マレーシア・ベトナム・フィリピン・タイ・カンボジアなどアジアの高利回り物件を多数掲載。マンション・コンドミニアム・一戸建てなど完全網羅。',
  }
}

export default function MainLayout({ children }) {
  return (
    <div>
      <Header/>
      {children}
      <FooterMenu/>
      <Footer/>
    </div>
  )
}