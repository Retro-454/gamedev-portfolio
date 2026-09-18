import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Knight-player demo", "img/projects/knight.png",
    `
    <div class="paragraph">
     <strong>The knight Demo</strong> is a demo created for Bandit Game Studio for the technical team to create a playable character demo of the knight class of our 3D game "Gold and Shadows"
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Moveable character using both standard 3D movement and Tank controls</li>
        <li>A light attack and a heavy attack tha combos into a spin attack</li>
        <li>A shield mode that slows movement but allows for a dash that pushes enemies</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/in_game.png" alt="In game screenshot" />
        <img class="phone-screenshot" src="img/projects/unity.png" alt="Unity Screnshot" />
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Ghost Cat", "img/projects/ghost.png", `
    <div class="paragraph">
        <strong>Ghost Cat</strong> was a halloween gamejam project created with a group of friends. Sadly we missed the deadline but we did make a 2D beat-em-up at the end of the day
        <br/>Play the game: <a target="_blank" href="https://retrogamer-1112.itch.io/ghost-cat">Here</a>.
    </div>
    <div class="paragraph center">
         <img class="pc-screenshot" src="img/projects/cat.png" alt="In-game screenshot" />
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>2D Beat-em-up with simple combat</li>
        <li>Created a wave system that uses spawn points to summon waves of enemies</li>
        <li>Wave system is super customizable with different enemies, wave sizes, and rounds</li>
        <li>First time playing with level design</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code is available on <a href="https://github.com/Retro-454/Scream_flower_2025" target="_blank">GitHub</a>.
    </div>
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "The Oddessey", "img/projects/mid.png", `
    <div class="paragraph">
        <strong>The Oddessey</strong>  my first ever gamejam project, made with a randomly assigned group we made this over one weekend.
       <br/>Play the game: <a target="_blank" href="https://retrogamer-1112.itch.io/the-odyssey">Here</a>.
    </div>
    <div class="paragraph center">
       <img class="pc-screenshot" src="img/projects/end.png" alt="In-game screenshot" />
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>First time using Unity</li>
        <li>Simple combat and movement</li>
        <li>Used Unity sprite and animation tools to make walk animations</li>
        <li>Lead the team in making the game in just 2 days</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
      
        Source code is available on <a href="https://github.com/Retro-454/The_Odyssey_Game" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/start.png" alt="Drawing Overload Screenshot" />
 
    </div>
    `, "#383838"),
];