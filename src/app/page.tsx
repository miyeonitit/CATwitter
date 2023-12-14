import BeforeLoginPage from "./(beforeLogin)/page";
import BeforeLoginLayout from "./(beforeLogin)/layout";
import BeforeLoginModal from "./(beforeLogin)/@modal/page";

export default function Home() {
  return (
    <>
      <BeforeLoginLayout modal={<BeforeLoginModal />}>
        <BeforeLoginPage />
      </BeforeLoginLayout>
    </>
  );
}
