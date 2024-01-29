import CharacterEquipment from "./CharacterEquipment";
import CharacterScores from "./CharacterScores";
import CharacterSpell from "./CharacterSpell";
import './character.css'

export default function Character() {
    return (
        <div id = "character-root-container">
            <CharacterScores/>
            <CharacterEquipment/>
            <CharacterSpell/>
        </div>
    )
}