import GetParty from "./routes/GetParty.jsx";
import PartyButtons from "./components/partyButtons";
import { createContext } from "react";

export default function App() {
  const { party, loading, error } = GetParty ("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/guests");
console.log(party);
console.log("loading,", loading);
console.log("error,", error);

return ( <>
<h1>Party Info</h1>
<partyButtons />
</> );
}