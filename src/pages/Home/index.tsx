import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { FaWhatsapp } from "react-icons/fa";


const stuffedPotatoes = [
  {
    title: "Batata Bacon",
    description: "Deliciosa batata recheada com bacon crocante. Um clássico!",
    image: "https://i.pinimg.com/736x/c1/5f/e3/c15fe33e551654a9e1c1a30c6c74918d.jpg", // Replace with a real image
  },
  {
    title: "Batata Mortadela",
    description:
      "Sabor irresistível de mortadela defumada. Experimente essa explosão de sabores!",
    image: "https://www.minhareceita.com.br/app/uploads/2020/10/batata-recheada-com-mortadela-defumada.jpg", // Replace with a real image
  },
  {
    title: "Batata Cheddar",
    description: "Cremosa e gratinada, a Batata Cheddar é puro conforto!",
    image: "https://imagem.band.com.br/35/f_228735.jpg", // Replace with a real image
  },
  {
    title: "Batata Calabresa",
    description: "Calabresa picadinha e temperada deixa essa batata irresistível!",
    image: "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/03/18/116435475-batata-recheada-calabresa.jpg", // Replace with a real image
  },
  {
    title: "Batata Carne",
    description: "Carne moída suculenta e temperada. Perfeita para quem ama um bom comfort food!",
    image: "https://cdn0.tudoreceitas.com/pt/posts/6/1/8/batata_recheada_com_carne_moida_3816_600.jpg", // Replace with a real image
  },
  {
    title: "Batata Strogonoff",
    description: "Creme de strogonoff de dar água na boca. Um clássico reinventado!",
    image: "https://cdn0.tudoreceitas.com/pt/posts/4/0/9/batata_recheada_com_estrogonofe_3904_600_square.jpg", // Replace with a real image
  },
];
const pastries = [
  {
    title: "Pastel de Carne",
    description:
      "Recheio clássico de carne moída com tempero caseiro. Um sabor que nunca sai de moda!",
    image: "https://superpao.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Fsuperpao.vtexassets.com%2Farquivos%2Fids%2F440654%2FPastel-Carne-100g.jpg%3Fv%3D638481973573070000", // Replace with a real image
  },
  {
    title: "Pastel de Frango com Catupiry",
    description:
      "Frango desfiado com catupiry cremoso. Uma combinação irresistível!",
    image: "https://receitinhas.com.br/wp-content/uploads/2023/02/Pastel-de-frango-com-catupiry-1-1200x738.png", // Replace with a real image
  },
  {
    title: "Pastel de Queijo com Requeijão",
    description:
      "Queijo derretido com requeijão cremoso. Um clássico que agrada a todos!",
    image: "https://i.ytimg.com/vi/xFGiLz5Qyb0/maxresdefault.jpg", // Replace with a real image
  },
  {
    title: "Pastel de Palmito",
    description:
      "Palmito refogado com tempero caseiro. Uma opção leve e saborosa!",
    image: "https://i.ytimg.com/vi/wnr6oDe-IXk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCMb_vn7it8I06xLrQXUZY8BtlPbg", // Replace with a real image
  },
  {
    title: "Pastel de Pizza",
    description:
      "Recheio de molho de tomate, queijo, presunto e calabresa. Um sabor que lembra pizza!",
    image: "https://media-cdn.tripadvisor.com/media/photo-p/1c/c6/6d/88/pastel-de-carne-moida.jpg", // Replace with a real image
  },
  {
    title: "Pastel de Doce de Leite",
    description:
      "Doce de leite cremoso e saboroso. Uma sobremesa deliciosa!",
    image: "https://s2.glbimg.com/d8exWGGMfnw4DbwsFPkb-VXh30g=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/06/16/pastel-bangalo-de-palmito.jpg", // Replace with a real image
  },
];
const fruitCreams = [
  {
    title: "Creme de Morango",
    description:
      "Creme cremoso e doce feito com morangos frescos. Uma sobremesa refrescante!",
    image: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/cc99b7becf9faf58324fcc2d2c31d243.jpg?itok=axESiCcu", // Replace with a real image
  },
  {
    title: "Creme de Abacaxi com Coco",
    description:
      "Creme tropical feito com abacaxi fresco e coco ralado. Um sabor exótico e delicioso!",
    image: "https://i.ytimg.com/vi/_4Bw5u8dKNg/sddefault.jpg", // Replace with a real image
  },
  {
    title: "Creme de Manga com Maracujá",
    description:
      "Creme azedinho e doce feito com manga fresca e maracujá. Uma sobremesa leve e saborosa!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ453hprpAExRypqahRzdWwZAHdI6jX0_HiVQ3Qm4mIsSPSdlM9ANaEKwMRVZwU5Ykl8_Q&usqp=CAU", // Replace with a real image
  },
  {
    title: "Creme de Kiwi com Iogurte",
    description:
      "Creme leve e refrescante feito com kiwi fresco e iogurte natural. Uma opção saudável e saborosa!",
    image: "https://www.guiadasemana.com.br/contentFiles/system/pictures/2012/3/44327/cropped/qualyfruit-sucos.jpg", // Replace with a real image
  },
  {
    title: "Creme de Pêssego com Chantilly",
    description:
      "Creme cremoso e doce feito com pêssego fresco e chantilly. Uma sobremesa clássica e deliciosa!",
    image: "https://static.wixstatic.com/media/1a01a0_c085f393fc8f4b40824380f086096cfa~mv2.jpg/v1/fill/w_595,h_420,al_c,lg_1,q_80/1a01a0_c085f393fc8f4b40824380f086096cfa~mv2.jpg", // Replace with a real image
  },
  {
    title: "Creme de Banana com Caramelo",
    description:
      "Creme cremoso e doce feito com banana fresca e caramelo. Uma sobremesa irresistível!",
    image: "https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/598685da-2baa-4a2d-8dc5-818f134e519e/dd9b79a0-2123-4d61-a502-9015df25e142.jpg", // Replace with a real image
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:px-16 px-2 py-8">
      <div className="bg-white rounded-md sm:p-8 max-w-screen-lg mx-auto">
        <div className="flex w-full justify-center mt-4 pt-2">
          <div className="p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
            <img className="rounded-full w-32" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604" />
          </div>
        </div>
        <h3 className="scroll-m-20 text-lg text-center mt-2 font-bold">David Restaurante C&A</h3>
        <div className="flex items-center gap-2 justify-center mb-4">
          <FaWhatsapp />
          <h3 className="scroll-m-20 text-md text-center font-normal">62 9 8590-5820 </h3>
          |
          <FaWhatsapp />
          <h3 className="scroll-m-20 text-md text-center font-normal">62 9 8590-5272 </h3>
        </div>


        <h3 className="scroll-m-20 text-xl font-bold mx-4">Batatas recheada</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-around p-4 gap-2">
          {stuffedPotatoes.map((potato) => (
            <Card className="flex flex-col p-2 gap-2" key={potato.title}>
              <img src={potato.image} alt="Image" className="rounded-md object-cover w-full h-48 md:h-32" />
              <div>
                <h3 className="text-lg font-bold">{potato.title}</h3>
                <h3 className="text-xs">R$ 10,00</h3>
              </div>
              <blockquote className="italic text-zinc-700 flex-1 line-clamp-3 text-sm">{potato.description}</blockquote>
              <Button className="mt-2 gap-2 justify-between hover:pr-6 transition-all bg-green-500 hover:bg-green-400">
                Pedir
                <FaWhatsapp />
              </Button>
            </Card>
          ))}
        </div>

        <h3 className="scroll-m-20 text-xl font-bold my-4 mx-4">Pasteis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-around p-4 gap-2">
          {pastries.map((potato) => (
            <Card className="flex flex-col p-2 gap-2" key={potato.title}>
              <img src={potato.image} alt="Image" className="rounded-md object-cover w-full h-48 md:h-32" />
              <div>
                <h3 className="text-lg font-bold">{potato.title}</h3>
                <h3 className="text-xs">R$ 10,00</h3>
              </div>
              <blockquote className="italic text-zinc-700 flex-1 line-clamp-3 text-sm">{potato.description}</blockquote>
              <Button className="mt-2 gap-2 justify-between hover:pr-6 transition-all bg-green-500 hover:bg-green-400">
                Pedir
                <FaWhatsapp />
              </Button>
            </Card>
          ))}
        </div>

        <h3 className="scroll-m-20 text-xl font-bold my-4 mx-4">Cremes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-around p-4 gap-2">
          {fruitCreams.map((potato) => (
            <Card className="flex flex-col p-2 gap-2" key={potato.title}>
              <img src={potato.image} alt="Image" className="rounded-md object-cover w-full h-48 md:h-32" />
              <div>
                <h3 className="text-lg font-bold">{potato.title}</h3>
                <h3 className="text-xs">R$ 10,00</h3>
              </div>
              <blockquote className="italic text-zinc-700 flex-1 line-clamp-3 text-sm">{potato.description}</blockquote>
              <Button className="mt-2 gap-2 justify-between hover:pr-6 transition-all bg-green-500 hover:bg-green-400">
                Pedir
                <FaWhatsapp />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
