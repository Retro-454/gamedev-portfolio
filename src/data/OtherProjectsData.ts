import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "Airline Website", "img/projects/img_2.png", `
    <div class="paragraph">
      <strong>Miner Airlines</strong> is a class project I made with a team while studying the agile software development process
            </div>
            <div class="paragraph center">
              <img class="pc-screenshot" src="img/projects/img_2.png" alt="Sultans Of Sing Screenshot" />
          </div>
          
          <div class="paragraph">
        <div class="notice">
        Source code is available on <a href="https://github.com/Retro-454/AgileSoftwareDevelopment-ProjectTeam12" target="_blank">GitHub</a>.
        </div>
        </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>You can search and book airline tickets/li>
            <li>Bookings appear as booking cards in MyBookings</li>
            <li>You earn reward points for booking</li>
            <li>You can rebook flights with all your info being saved</li>
            <li>As a admin, you can review a flight path's revenue</li>
            </ul>
        </div>

        <div class="paragraph center">
          <img class="pc-screenshot" src="img/projects/img_3.png" alt="Booking Screenshot" />
          <img class="pc-screenshot" src="img/projects/img_4.png" alt="Reward Screenshot" />
          <img class="pc-screenshot" src="img/projects/img_5.png" alt="Revenue Screenshot" /> 
        </div>
    `, "#c10606", false, true),
];