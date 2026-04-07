import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import ListingWizard from "@/components/listing/ListingWizard";

export default function AddListingPage() {
  return (
    <main className="app-shell">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          <ListingWizard />
        </div>
      </div>
    </main>
  );
}