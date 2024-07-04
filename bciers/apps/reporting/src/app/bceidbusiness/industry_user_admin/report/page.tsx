import { auth } from "@/dashboard/auth";

import MultiStepHeader from "@bciers/components/form/components/MultiStepHeader";

export default async function Page() {
  // Get the user's identity provider
  // const session = await auth();
  // const name = session?.user?.full_name;
  // // Build the navigation tiles
  // return <>TBD {name}</>;


  const customStepNames = [
    "Operation Information",
    "Facilities Information",
    "Annual Report Section 2",
    "Sign-off & Submit"
  ];

  return (
    <div className="container mx-auto p-4">
      <MultiStepHeader step={1} steps={customStepNames} />
    </div>
  );
}
