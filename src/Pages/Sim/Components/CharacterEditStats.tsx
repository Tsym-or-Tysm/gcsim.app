import { CharDetail, StatToIndexMap } from "~src/Components/Character";
import { StatRow } from "./CharacterEditStatRow";

import {
  IconAtk,
  IconCD,
  IconCR,
  IconDef,
  IconEM,
  IconER,
  IconHP,
} from "./Icons";

export type subDisplayLine = {
  stat?: string;
  stat_?: string;
  label: string;
  val: number;
  val_: number;
  icon: React.ReactElement;
};

type StatRowsProp = {
  stats: number[];
  onChange: (index: number, value: number) => void;
};

function StatRows(props: StatRowsProp) {
  let subs: subDisplayLine[] = [
    {
      stat: "HP",
      stat_: "HPP",
      label: "HP%/HP",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
    {
      stat: "ATK",
      stat_: "ATKP",
      label: "Atk%/Atk",
      val: 0,
      val_: 0,
      icon: <IconAtk className="fill-gray-100" />,
    },
    {
      stat: "DEF",
      stat_: "DEFP",
      label: "Def%/Def",
      val_: 0,
      val: 0,
      icon: <IconDef className="fill-gray-100" />,
    },
    {
      stat: "EM",
      label: "EM",
      val_: 0,
      val: 0,
      icon: <IconEM className="fill-gray-100" />,
    },
    {
      stat_: "ER",
      label: "ER",
      val_: 0,
      val: 0,
      icon: <IconER className="fill-gray-100" />,
    },
    {
      stat_: "CR",
      label: "CR",
      val_: 0,
      val: 0,
      icon: <IconCR className="fill-gray-100" />,
    },
    {
      stat_: "CD",
      label: "CD",
      val_: 0,
      val: 0,
      icon: <IconCD className="fill-gray-100" />,
    },
  ];

  let eleSubs: subDisplayLine[] = [
    {
      stat_: "Heal",
      label: "Heal%",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
    {
      stat_: "PyroP",
      label: "Pyro%",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
    {
      stat_: "HydroP",
      label: "Hydro%",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
    {
      stat_: "CryoP",
      label: "Cryo%",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
    {
      stat_: "ElectroP",
      label: "Electro%",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
    {
      stat_: "AnemoP",
      label: "Anemo%",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
    {
      stat_: "GeoP",
      label: "Geo%",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
    {
      stat_: "PhyP",
      label: "Phy%",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
    {
      stat_: "DendroP",
      label: "Dendro%",
      val_: 0,
      val: 0,
      icon: <IconHP className="fill-gray-100" />,
    },
  ];

  const rows = subs.map((sub, index) => {
    //find the stats
    if (sub.stat) {
      sub.val = props.stats[StatToIndexMap[sub.stat]];
    }
    if (sub.stat_) {
      sub.val_ =
        Math.round(props.stats[StatToIndexMap[sub.stat_]] * 10000) / 100;
    }
    return <StatRow key={index} sub={sub} onChange={props.onChange} />;
  });

  const eleRows = eleSubs.map((sub, index) => {
    if (sub.stat_) {
      sub.val_ =
        Math.round(props.stats[StatToIndexMap[sub.stat_]] * 10000) / 100;
    }
    return <StatRow key={index} sub={sub} onChange={props.onChange} />;
  });

  return (
    <div className="flex flex-row flex-wrap">
      <div className="basis-full lg:basis-1/2 pl-2 pr-2 ">{rows}</div>
      <div className="basis-full lg:basis-1/2 pl-2 pr-2">{eleRows}</div>
    </div>
  );
}

type Props = {
  char: CharDetail;
  onChange: (index: number, value: number) => void;
};

export function CharacterStats({ char, onChange }: Props) {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-lg">Stats</div>
      <StatRows stats={char.stats} onChange={onChange} />
    </div>
  );
}