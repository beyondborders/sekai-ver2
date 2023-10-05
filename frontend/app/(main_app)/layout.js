import Header from "@/components/Header/Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header/>
      {children}
      <div>footer</div>
    </div>
  )
}