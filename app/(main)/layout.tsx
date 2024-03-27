import NavBar from "@/components/NavBar";
export default function MainLayout({ children }) {
    return (
      <div>
        {children} 
        <NavBar />
      </div>
    )
}