import { Header } from '../components/header';
import { UiTextField } from '../components/uikit';

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <UiTextField label="Label" placeholder="placeholder" helperText="Helper text" errorText="error" required />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
