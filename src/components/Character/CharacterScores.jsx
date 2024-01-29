import "./character.css";
export default function CharacterScores() {
  return (
    <div id="container">
      <div id="label-div">
        <label>Name: Temporary</label>
      </div>
      <div id="top">
        <div id="ability-scores-container">
            <label>Str: 10 +5</label>
            <label>Dex: 10 +5</label>
            <label>Con: 10 +5</label>
            <label>Int: 10 +5</label>
            <label>Wis: 10 +5</label>
            <label>Cha: 10 +5</label>
            <label>Proficiency bonus +5</label>

        </div>
        <div id="character-img-container">
            <p>right</p>
        </div>
      </div>
      <div id="bottom">
        <p>bottom</p>
      </div>
    </div>
  );
}
