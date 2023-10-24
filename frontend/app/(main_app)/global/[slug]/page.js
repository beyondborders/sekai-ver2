import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";

import { notFound } from 'next/navigation';
import Guide from "@/components/Guide/Guide";
import PropertyMaterial from "@/components/Guide/PropertyMaterial";

const getGuide = async (slug) => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/guides/url?url=/global/${slug}`, { cache: 'no-store' });
  if (data.status !== 200) {
    notFound();
  }
  const guide = data.json()
  return guide
}

export default async function Global({ params }) {
  let guide = await getGuide(params.slug);
  guide = guide.guide;
  return (
    <section>
      <div className={styles.FVImage}>
        <Image
          priority={true}
          fill={true}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          src={guide.image_url.split(';')[0]}
        />
      </div>

      {
        guide.guide_type == 'library' ?
        <Guide guide={guide}/> :
        <PropertyMaterial guide={guide}/>
      }
    </section>
  )
}