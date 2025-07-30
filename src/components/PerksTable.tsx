import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const perks = [{
  perk: "Founding Badge",
  description: "Special badge beside your username in profile and marketing assets"
}, {
  perk: "Launch Events",
  description: "Invitation to exclusive live and virtual jams with other Founding Jammers"
}, {
  perk: "Influence Roadmap",
  description: "Direct ability to suggest/vote on new features and priorities"
}, {
  perk: "Early Feature Access",
  description: "Try out new tools and updates before anyone else"
}, {
  perk: "Grass Branded Popsite",
  description: "One year free tier for Founding Jammers. Ambassadors will receive an exclusive Grass branded website for personal use."
}];
const PerksTable = () => {
  return <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Founding Jammer Benefits</h2>
          
          
        </div>
        
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-card to-secondary/10 border-grass/20 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-grass">Exclusive Perks & Privileges</CardTitle>
            <CardDescription>Exclusive perks and privileges for life</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-grass/20">
                  <TableHead className="text-grass font-semibold">Perk</TableHead>
                  <TableHead className="text-grass font-semibold">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {perks.map((perk, index) => <TableRow key={index} className="border-grass/10 hover:bg-secondary/30 transition-colors">
                    <TableCell className="font-medium text-foreground">{perk.perk}</TableCell>
                    <TableCell className="text-muted-foreground">{perk.description}</TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default PerksTable;