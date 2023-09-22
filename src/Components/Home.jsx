import React from 'react';
import vg from "../img/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram, AiFillMacCommand } from "react-icons/ai";

function Home() {
  return (
    <>
        <div className='home' id="home">
            <main>
                <h1> TechyStar </h1>
                <p> Solution to all your problems . </p>
            </main>
        </div>

        <div className='home2'>
            <img src={vg} alt='Graphics' />

            <div>
                <p>
                    We are your one and only solution to the tech problems
                    you face every day. We are leading tech company whose aim is to
                    increase the problem solving ability in children.
                </p>
            </div>
        </div>

        <div className='home3' id="about">
            <div>
                <h1>Who we are?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt expedita obcaecati ipsam ducimus cumque eos molestias non, enim minus commodi natus animi illum voluptatem. Commodi distinctio amet inventore aut architecto, dolor, magni numquam quis voluptatibus possimus, qui placeat dignissimos error minima sapiente quam id. Sapiente, animi dolore! Velit necessitatibus voluptatem fugit accusantium officiis corporis suscipit quisquam temporibus quis voluptates praesentium soluta vitae quia amet nisi consequuntur at adipisci, asperiores quas eius. Ad autem provident quae maiores, vero ea doloremque, officia accusantium sapiente aperiam, ut accusamus cupiditate? Voluptates iste nostrum rerum suscipit? Commodi ea nemo quo aliquid atque molestias amet.
                </p>
            </div>
        </div>

        <div className='home4' id="brands">
            <div >
                <h1>Brands</h1>

                <article>

                    <div style={{ animationDelay : "0.3s"}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>

                    <div style={{ animationDelay : "0.6s"}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                    <div style={{ animationDelay : "0.9s"}}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div style={{ animationDelay : "1.2s"}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>

                </article>

            </div>
        </div>
    </>
  );
};

export default Home;