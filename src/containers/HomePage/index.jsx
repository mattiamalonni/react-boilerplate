import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../layouts';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle={t('containers.home.title')}>
      <div className="space-y-5 text-justify">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eligendi sed laborum, ab
          delectus omnis expedita quas beatae culpa nisi cupiditate, voluptatum alias praesentium
          architecto officiis earum! Molestiae hic reiciendis exercitationem perspiciatis mollitia
          sit facere obcaecati numquam quasi earum labore assumenda, quod impedit accusamus possimus
          nam commodi praesentium illum nesciunt? Vero, sunt, molestias vel quos, accusamus esse
          reiciendis officiis magni possimus veniam doloremque et natus modi inventore suscipit
          accusantium laboriosam? Blanditiis rerum repudiandae vel, quisquam animi neque earum in.
          Id delectus, ex consectetur omnis sapiente alias eos soluta blanditiis aliquid provident
          perferendis voluptatum accusamus, ipsa, fuga magnam repellendus excepturi animi totam
          eveniet. Adipisci laborum cupiditate doloribus soluta voluptates illo cum distinctio
          sapiente, et quasi explicabo corrupti sequi cumque magni libero?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi consequatur temporibus
          sit quos assumenda iste ea vero rerum dignissimos. Optio, provident blanditiis? Minus
          ullam aperiam consequuntur esse quis sequi quam mollitia, incidunt saepe quas pariatur
          atque earum. Repellendus assumenda nam veritatis consequuntur labore, quo dicta distinctio
          quis tempora quidem! Quam voluptatum, sapiente excepturi ut molestias sequi dicta illum
          nam harum aperiam nemo dolorem, autem consectetur ullam reiciendis recusandae! Culpa ullam
          minima architecto atque facilis consequatur, laboriosam nam omnis quibusdam. Quasi, nulla?
          Incidunt ratione maiores laboriosam et at assumenda inventore eius rem iusto, quibusdam
          itaque labore impedit dolores quia facere dolorum aperiam cupiditate neque quam porro in
          officia qui a? Dignissimos molestias voluptas voluptates adipisci sequi earum ex nostrum
          illum perspiciatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quas eveniet obcaecati a,
          autem libero laborum. Tenetur nulla eaque nesciunt perspiciatis, hic non esse ipsa fugiat
          quia placeat fugit cupiditate voluptatem beatae magnam repellat iure explicabo praesentium
          rem animi ratione, laboriosam doloremque! Recusandae sequi voluptatibus ipsa at voluptas
          ullam beatae optio laudantium quibusdam doloremque aliquid aliquam doloribus sit magnam
          laborum, nihil accusamus, illum esse? Repellat quisquam dolorum aliquid voluptatibus quos
          alias, itaque necessitatibus voluptatum excepturi eum. Repellendus, harum! Aliquid impedit
          dignissimos molestias consequatur repellat debitis. Doloribus quas eveniet magnam quam
          fugiat sed a non illum ducimus iure ex minus voluptatibus voluptatum, vitae optio, ullam
          nobis, amet dolorem nisi aspernatur est officia doloremque facilis quidem? Corrupti
          pariatur adipisci ipsam culpa ut.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
