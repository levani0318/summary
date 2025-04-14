import vector from "../assets/Vector.png";
import group from "../assets/group.png";
import chat from "../assets/iconoir_chat-remove.png";
import eye from "../assets/iconoir_eye-empty.png";

export default function MadeLi() {
  const items = [
    { id: 1, title: "Reaction", image: vector },
    { id: 2, title: "Memory", image: group },
    { id: 3, title: "Verbal", image: chat },
    { id: 4, title: "Visual", image: eye },
  ];
  return (
    <>
      <ul className="pb-2 mt-8">
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} title={item.title} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

/*
        <li className="">
          <img src={vector} alt="vector" className="li-image" />
          Reaction
        </li>
        <li className="">
          <img src={group} alt="memory" className="li-image" />
          Memory
        </li>
        <li className="">
          <img src={chat} alt="chat-remove" className="li-image" />
          Verbal
        </li>
        <li className="bg-[#F4F4FE]">
          <img src={eye} alt="eye empty" className="li-image" />
          Visual
        </li>
*/
