import Inquiry from '@/components/Inquiry/Inquiry';
import { notFound } from 'next/navigation';

export default async function Global({ params }) {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/guides/url=/global/${params.slug}`, { cache: 'no-store' });
  console.log(`http://${process.env.API_BASE_URL}/api/v1/guides/url=/global/${params.slug}`)
  // const guide = await data.json();
  // console.log(guide)
  // if (!guide.ok) {
  //   notFound();
  // }
  // return <div>{guide.label}</div>;
  return(
    <div>
      {params.slug}
      <Inquiry/>
    </div>
  ) 
}