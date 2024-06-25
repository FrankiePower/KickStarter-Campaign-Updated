import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x23987Bc28DfD55CD8059FA971BcDe44acf54f2F2"
);

export default instance;
