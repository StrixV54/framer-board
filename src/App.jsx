import { useState } from "react";
import ShiftingDropDown from "./CoolMenu";
import CustomKanban from "./DragDrop";
import TextParallaxContentExample from "./ParallexScrollText";
import SlideInNotifications from "./Toast";

const Tabs = {
  CoolMenu: <ShiftingDropDown />,
  DrapDropBoard: <CustomKanban />,
  TextScrollParallex: <TextParallaxContentExample />,
  SlideToast: <SlideInNotifications />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState(Object.keys(Tabs)[0]);
  return (
    <div className="h-screen bg-[#111111] text-[#f0f0f0] w-full flex flex-col">
      <ul className="flex flex-wrap w-full bg-[#181818] gap-1 p-1">
        {Object.keys(Tabs).map((item, idx) => (
          <li
            key={idx}
            onClick={() => setActiveTab(item)}
            className={`p-2 text-left text-sm font-semibold cursor-pointer rounded-lg transition-all duration-300 border-2 hover:bg-violet-600/20 ${
              activeTab === item ? "bg-violet-700 px-10 border-violet-600" : "bg-none border-gray-700 text-white/50"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="h-full w-full flex-1 bg-black">{Tabs[activeTab]}</div>
    </div>
  );
}
