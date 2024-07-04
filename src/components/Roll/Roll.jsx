import Dice from "./Dice";
import DiceModifier from "./DiceModifier";

export default function Roll() {
    return (
        <div id="base-container">
            <DiceModifier/>
            <Dice/>
        </div>
    )
}