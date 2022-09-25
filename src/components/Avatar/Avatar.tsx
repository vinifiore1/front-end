import { BigHead } from "@bigheads/core";

interface IPropsAvatar {
  type: string;
}
const Avatar = (props: IPropsAvatar) => {
  switch (props.type) {
    case "psicologo":
      return (
        <BigHead
          accessory="roundGlasses"
          body="chest"
          circleColor="blue"
          clothing="dressShirt"
          clothingColor="green"
          eyebrows="angry"
          eyes="happy"
          facialHair="none"
          graphic="gatsby"
          hair="short"
          hairColor="black"
          hat="none"
          hatColor="white"
          lashes
          lipColor="purple"
          mask
          mouth="openSmile"
          skinTone="light"
        />
      );
    case "pediatra":
      return (
        <BigHead
          body="chest"
          circleColor="blue"
          clothing="dressShirt"
          clothingColor="green"
          eyebrows="raised"
          eyes="happy"
          facialHair="none"
          graphic="gatsby"
          hair="afro"
          hairColor="black"
          hat="none"
          hatColor="white"
          lashes
          lipColor="purple"
          mask
          mouth="openSmile"
          skinTone="brown"
        />
      );
    default:
      return (
        <BigHead
          accessory="none"
          body="chest"
          circleColor="blue"
          clothing="dressShirt"
          clothingColor="blue"
          eyebrows="leftLowered"
          eyes="happy"
          faceMask={false}
          faceMaskColor="black"
          facialHair="none"
          graphic="react"
          hair="none"
          hairColor="brown"
          hat="none2"
          hatColor="white"
          lashes
          lipColor="turqoise"
          mask
          mouth="tongue"
          skinTone="red"
        />
      );
  }
};
export default Avatar;
