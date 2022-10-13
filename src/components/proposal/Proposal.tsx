import { TezosToolkit } from "@taquito/taquito";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ProposalStat from "./ProposalStat";
import Constants from "../../Constants";

function Proposal({ Tezos, setPeriod, setProposal }: { Tezos: TezosToolkit, setPeriod: Dispatch<SetStateAction<string>>, setProposal: Dispatch<SetStateAction<string | undefined>> }) {

  const [proposalHash, setProposalHash] = useState<any>("");
  const [remaining, setRemaining] = useState<number | string>(0);
  const [periodKind, setPeriodKind] = useState<string>("");

  useEffect(() => {
    (async () => {

      Tezos.rpc.getCurrentPeriod()
        .then((period) => {
          console.log(`Current period: ${JSON.stringify(period)}`)
          const kind = period.voting_period.kind
          setRemaining(period.remaining);
          setPeriodKind(kind);
          setPeriod(kind);
          console.log(`period ${kind}`)

          switch (kind) {
            case Constants.Period.PROPOSAL:
              console.log("Proposal period");

              Tezos.rpc.getProposals()
                .then((proposals) => {
                  console.log(proposals);
                  if (proposals && proposals[0]) {
                    setProposalHash(proposals[0][0]);
                    setProposal(proposals[0][0]);
                  }
                });

              break;

            case Constants.Period.EXPLORATION:
            case Constants.Period.PROMOTION:

              console.log("Ballot period");
              Tezos.rpc.getCurrentProposal()
                .then((hash) => {
                  const proposalHash: string = hash?.toString() || "";
                  setProposalHash(proposalHash);
                  setProposal(proposalHash);
                  console.log(`proposal hash ${proposalHash}`)
                })
                .catch((error) => { console.error(error); setProposalHash("error") });

              break;
            default:
              console.error(`Unknown period ${kind}`)
              break;
          }

        })
        .catch((error) => { console.error(error); setRemaining("error") });

    })();
  }, []);


  return (
    <Card>
      <Card.Body>
        <div>
          <h4>Proposal</h4>
          <div className="list-item"><div className="item-name">Prococol:</div><div className="item-value">{proposalHash}</div></div>
          <div className="list-item"><div className="item-name">Period:</div><div className="item-value">{periodKind}</div></div>
          <div className="list-item"><div className="item-name">Remaining:</div><div className="item-value">{remaining}</div></div>
        </div>
        <div>
          <ProposalStat Tezos={Tezos} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Proposal;
