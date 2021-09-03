import ReactDom from "react-dom";
import faker from "faker";
import Card from "./Card";
import Table from "./Table";

const App=() =>{
   return  (

       <div class="ui card">
         <Card
         name="Jane"
         date="10/08/2020"
         avatar={faker.image.avatar()}
         description="Jane is Computer Engineer "
         />

         <Card
         name="Albert"
         date="10/11/2019"
         avatar={faker.image.avatar()}
         description="Albert is Teacher "
         />

       <Table>
       <Card
         name="Sam"
         date="07/07/2020"
         avatar={faker.image.avatar()}
         description="Sam is Computer Engineer "
         />
           </Table>

       
       </div>

       
   );
};

ReactDom.render(<App/> , document.getElementById("root"));