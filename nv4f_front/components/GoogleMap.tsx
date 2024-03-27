"use client";
export default function GoogleMap() {

  return (
    <div
      dangerouslySetInnerHTML={{ __html: `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12663.487707715492!2d127.09368590000001!3d37.48734854999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0d083d5e25d%3A0x3605fe25303252aa!2z7Jyg64uI67KE7ISkIOyKpO2KnOuUlOyYpCDsnqztjKw!5e0!3m2!1sko!2skr!4v1711554053618!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
      `}}
    />
  );
}