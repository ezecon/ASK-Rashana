
export default function Profile() {
    const data = [{
        name: "Md. Econozzaman Econ",
        Email:"md.econozzaman@gmail.com",
        Number:"01533798331",
    }]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 m-10 rounded-xl border ">
        <div>
            <img className="rounded-xl" src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/438301459_2478369702550969_5250834645199073879_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dLaXaDLqRzYQ7kNvgEqPTQc&_nc_ht=scontent.fcgp27-1.fna&oh=00_AYC9JyZL-17VPXsnbjT1I7D2hRitNJkr5yHnUiLRagxWZg&oe=66BBD0C1" alt="" />
        </div>
        <div className="text-[goldenrod] p-10 text-left text-lg montserrat-alternates-nice">
            {
                data.map((data)=>
                <>Name : {data.name} <br />
                Email: {data.Email} <br />
                Number: {data.Number}</>
                )
            }
            <div className="text-bottom">
                <a href="/update-profile">Update Profile</a>
            </div>
        </div>
    </div>
  )
}
