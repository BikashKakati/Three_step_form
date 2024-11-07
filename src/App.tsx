import { useState } from "react";
import PaginationContainer from "./components/PaginationContainer";
import BusinessInfoPage from "./pages/BusinessInfoPage";
import ProfilePage from "./pages/ProfilePage";
import backgroundImg from "@/assets/backgroundImg.webp";
import Header from "./components/Header";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = 3;

  function goToNextPage() {
    setCurrentPage((prev) => Math.min(prev + 1, pages - 1));
  }

  function goToPreviousPage() {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  }

  return (
    <main className="w-full flex-1 relative flex flex-col items-center justify-start">
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <img src={backgroundImg} className="w-full h-full object-cover object-center"/>
      </div>
      <div className="max-w-[55rem] mx-auto flex-1 h-full w-full z-10">
      <Header/>
        <div className="bg-blue-200 min-h-[30rem] flex flex-col items-center justify-start w-full rounded-lg shadow-even mb-[8rem]">
          <PaginationContainer currentPage={currentPage}>
            <ProfilePage
              goToNextPage={goToNextPage}
              goToPreviousPage={goToPreviousPage}
              totalPage={pages}
              currentPage={currentPage}
            />
            <BusinessInfoPage
              goToNextPage={goToNextPage}
              goToPreviousPage={goToPreviousPage}
              totalPage={pages}
              currentPage={currentPage}
            />
          </PaginationContainer>
        </div>
      </div>
    </main>
  );
};

export default App;
