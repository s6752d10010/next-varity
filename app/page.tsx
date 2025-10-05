import Image from "next/image";
import cal from "./..//asset/images/cal.png";
import Footer from "./components/footer";
export default function HomePage() {
  return (
    <>
      <div className="w-10/12 border border-gray-500 mx-auto mb-10 mt-20 p-20 
      flex flex-col items-center" rounded-2xl shadow-xl>

        <Image src={cal} alt="cal" width={200}/>
        <h1>Varity Calculator V 1.0</h1>
        <h1>โปรแกรมคำนวณ</h1>
      

      </div>
            <Footer />
    </>
  );
}