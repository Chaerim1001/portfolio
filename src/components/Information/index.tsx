import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";
import { profile } from "console";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <img
          src={"images/chaerim/image27.png"} // 프로필 이미지 경로를 DataProps에서 가져옵니다.
          alt="Profile Image"
          className="w-40 h-40 rounded-full" // w-20 h-20는 이미지의 크기를 설정하며, rounded-full로 원형으로 만듭니다.
        />
        <h1 className="leading-[1.15]">
          {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
          안녕하세요,
          <br /> 백엔드 개발자{" "}
          <span className="text-PRIMARY font-semibold">{information.name}</span>
          입니다.
        </h1>
        <div className="flex gap-1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
