import { Button } from "@/components/ui/button";

const SetupMailgun = () => {
  const handleSetupSecret = () => {
    // This will be handled by the lov-secret-form action
    console.log("Setting up Mailgun secret");
  };

  return (
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
      <h3 className="font-semibold text-amber-800 mb-2">Mailgun Setup Required</h3>
      <p className="text-amber-700 mb-3">
        To enable email functionality, please add your Mailgun API key to Supabase secrets.
      </p>
      <Button 
        onClick={handleSetupSecret}
        className="bg-amber-600 hover:bg-amber-700 text-white"
      >
        Add Mailgun API Key
      </Button>
    </div>
  );
};

export default SetupMailgun;