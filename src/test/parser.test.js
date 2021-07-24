import pageParser from '../utils/parser';


describe('Testing Utils', () => {

	it('checks pageTitle is scraped correctly', () => {
		const { pageTitle } = pageParser(pageContent, 'http://localhost:8080');
		expect(pageTitle).toEqual("Create Free Online Forms & Surveys in 2 Mins | Formplus");
	});
    
	it('checks image links are all extracted', () => {
		const { images } = pageParser(pageContent, 'http://localhost:8080');
		const expected = [
			{
			  src: 'https://www.facebook.com/tr?id=616289371798400&ev=PageView&noscript=1',
			  alt: 'Welcome to Image Scraper'
			},
			{
			  src: 'https://q.quora.com/_/ad/24ed1a304a304af6a16f44327da4d6c9/pixel?tag=ViewContent&noscript=1',
			  alt: 'Welcome to Image Scraper'
			},
			{
			  src: 'http://localhost:8080/static/images/logo/formplus-logo.png',
			  alt: 'FormPlus Logo'
			},
			{
			  src: 'http://localhost:8080/static/images/external/homepage-images/desktop-animation.svg',
			  alt: 'Landing Animation'
			},
			{
			  src: 'http://localhost:8080/static/images/external/homepage-images/survey-maker.png',
			  alt: 'Online Forms'
			},
			{
			  src: 'http://localhost:8080/static/images/external/homepage-images/online-form.png',
			  alt: 'Data-collection'
			},
			{
			  src: 'http://localhost:8080/static/images/external/homepage-images/pdf-form.png',
			  alt: 'Surveys'
			},
			{
			  src: 'http://localhost:8080/static/images/external/ai-extracts/faces/mcam.svg',
			  alt: 'MCAM NorthWest'
			},
			{
			  src: 'http://localhost:8080/static/images/external/ai-extracts/faces/sarah-career-consultant.svg',
			  alt: 'Career Consultants'
			},
			{
			  src: 'http://localhost:8080/static/images/external/ai-extracts/faces/gensol.svg',
			  alt: 'Gensol'
			},
			{
			  src: 'http://localhost:8080/static/images/external/ai-extracts/faces/pab.svg',
			  alt: 'Pennsylvania Academy of Ballet'
			},
			{
			  src: 'http://localhost:8080/static/images/external/brand-logos/yellow-dandelion.webp',
			  alt: 'Yellow Dandelion Logo'
			},
			{
			  src: 'http://localhost:8080/static/images/external/brand-logos/polk-edu.png',
			  alt: 'Polk State Lakeland Collegiate Logo'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/google-drive.svg',
			  alt: 'Google Drive'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/google-sheets.svg',
			  alt: 'Google Sheets'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/dropbox.svg',
			  alt: 'Dropbox'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/trello.svg',
			  alt: 'Trello'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/slack.svg',
			  alt: 'Slack'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/salesforce.svg',
			  alt: 'Salesforce'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/airtable.svg',
			  alt: 'Airtable'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/mailchimp.svg',
			  alt: 'Mailchimp'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/discord.svg',
			  alt: 'Discord'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/asana.svg',
			  alt: 'Asana'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/freshdesk.svg',
			  alt: 'FreshDesk'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/wordpress.svg',
			  alt: 'Wordpress'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/basecamp.svg',
			  alt: 'Basecamp'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/sms-by-zapier.svg',
			  alt: 'SMS by Zapier'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/google-contacts.svg',
			  alt: 'Google Contacts'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/breezy.svg',
			  alt: 'Breezy HR'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/stripe.svg',
			  alt: 'Stripe'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/mysql.svg',
			  alt: 'MySQL'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/flutterwave.svg',
			  alt: 'Flutterwave'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/paystack.svg',
			  alt: 'Paystack'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/paypal.svg',
			  alt: 'Paypal'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/active-campaign.svg',
			  alt: 'Active Campaign'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/google-calendar.svg',
			  alt: 'Google Calendar'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/gmail.svg',
			  alt: 'Gmail'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/twilio.svg',
			  alt: 'Twilio'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/twitter.svg',
			  alt: 'Twitter'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/acuity.svg',
			  alt: 'Acuity Scheduling'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/zendesk.svg',
			  alt: 'Zendesk'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/webhooks.svg',
			  alt: 'Webhooks'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/keap.svg',
			  alt: 'Keap'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/podio.svg',
			  alt: 'Podio'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/google-docs.svg',
			  alt: 'Google Docs'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/fair-trade.svg',
			  alt: 'Fair Trade Federation'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/seattle-times.svg',
			  alt: 'Seattle Times'
			},
			{
			  src: "https://storage.googleapis.com/fplsblog/l'oreal.svg",
			  alt: "l'oreal Luxe"
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/und.svg',
			  alt: 'University of Notre Dame'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/grab-1.svg',
			  alt: 'Grab'
			},
			{
			  src: 'https://storage.googleapis.com/fplsblog/red-bull.svg',
			  alt: 'Red Bull'
			},
			{
			  src: 'http://localhost:8080/static/images/logo/Small-White.png',
			  alt: 'FormPlus Logo'
			}
		  ]
		expect(images).toEqual(expected);
	});
})


const pageContent = `
<!DOCTYPE html>
<html lang=en> <head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content="width=device-width, initial-scale=1"><meta name=referrer content=same-origin><meta name=keywords content="online form builder with database, create forms, create online registration form database, web forms software, online forms with electronic signature free,online form builder with database, form, formplus, form builder, online forms, survey, secure forms, mobile friendly, offline forms, save to cloud, mobile forms, form generator, registration forms, unlimited file uploads, application forms, form software, nsw-q-xji9hcnh9p-6w7qepqgu1yz0yj7buvdsd2grk-qpg9l0j9qps99533q9s0lq6ew7qophbiduyl6ntgv3hd2vhd4589x895n7t115b2kg7q7-mb3c6kjk2b9u3wxndz"><meta name=description content="Join over 500k people who have trusted us to create online forms & surveys for all their data collection needs."><meta name=author content><meta name=pocket-site-verification content=1d44f32044ed4be1900758a5a8ecc9><link rel=icon href=/static/images/favicon.ico type=image/ico><link rel=preconnect href=https://fonts.gstatic.com/ crossorigin ><link rel=preconnect href=https://fonts.googleapis.com/ crossorigin ><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css integrity=sha256-BJ/G+e+y7bQdrYkS2RBTyNfBHpA9IuGaPmf9htub5MQ= crossorigin=anonymous><link rel=preload as=font type=font/woff2 href=/static/fonts/quicksand-v9-latin-regular.woff2 crossorigin><link rel=preload as=font type=font/woff2 href=/static/fonts/open-sans-v16-latin-regular.woff2 crossorigin><link rel=canonical href=https://www.formpl.us><meta property=og:title content="Create Free Online Forms & Surveys in 2 Mins"><meta property=og:description content="Join over 500k people who have trusted us to create online forms & surveys for all their data
collection needs."><meta property=og:image content=https://storage.googleapis.com/fplsblog/home-image.png><meta property=og:url content=https://www.formpl.us><meta name=twitter:card content=summary_large_image><!-- Nav Critical CSS for external pages --><style>
      :root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%}header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}a{color:#007bff;text-decoration:none;background-color:transparent}img{vertical-align:middle;border-style:none}button{border-radius:0}button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button{overflow:visible}button{text-transform:none}[type=button],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.collapse:not(.show){display:none}.nav{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.navbar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}@media (min-width:992px){.navbar-expand-lg{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (min-width:992px){.d-lg-none{display:none!important}}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.ml-auto{margin-left:auto!important}.navbar.navbar-expand-lg{background-color:transparent;border:0;width:100%;padding:1rem 2rem}.navbar.navbar-expand-lg .navbar-nav .nav-link{padding:1rem 1.5rem;font-size:.9rem;color:#42526e;font-weight:500}.navbar.navbar-expand-lg .oi-menu::before{color:#42526e}.navbar.navbar-expand-lg .signup-button{margin-left:10px}@media (min-width:992px){.navbar.navbar-expand-lg .navbar-nav .btn{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}}@media (max-width:991.8px){.navbar.navbar-expand-lg{padding:1rem}.navbar.navbar-expand-lg .navbar-brand img{max-width:100px}.navbar.navbar-expand-lg .navbar-nav .btn{margin-top:.75rem;margin-bottom:.75rem;margin-left:1.5rem}.navbar.navbar-expand-lg .navbar-collapse{position:absolute;top:63px;left:0;width:100%;z-index:3;background:#fff;padding-bottom:2rem}}
    </style><title>Create Free Online Forms &amp; Surveys in 2 Mins | Formplus</title><style>
    *,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%}section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}h1,h2,h5{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}a{color:#007bff;text-decoration:none;background-color:transparent}img{vertical-align:middle;border-style:none}h1,h2,h5{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1{font-size:2.5rem}h2{font-size:2rem}h5{font-size:1.25rem}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-md-4,.col-sm-12{position:relative;width:100%;padding-right:15px;padding-left:15px}@media (min-width:576px){.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media (min-width:768px){.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.carousel-item.active{display:block}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-5{margin-top:3rem!important}.pt-4{padding-top:1.5rem!important}.pb-5{padding-bottom:3rem!important}@font-face{font-family:Quicksand;font-style:normal;font-display:swap;font-weight:400;unicode-range:u+000-5ff;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(/static/fonts/quicksand-v9-latin-regular.woff2) format("woff2"),url(/static/fonts/quicksand-v9-latin-regular.woff) format("woff")}@font-face{font-family:CircularStd;font-style:normal;font-display:swap;font-weight:500;unicode-range:u+000-5ff;src:local("Circular Std"),url(/static/fonts/CircularStd-Bold.otf) format("opentype")}@font-face{font-family:CircularStd;font-style:normal;font-display:swap;font-weight:400;unicode-range:u+000-5ff;src:local("Circular Std"),url(/static/fonts/CircularStd-Light.otf) format("opentype")}html{min-height:100%}body,html{position:relative;margin:0;padding:0}body{color:#42526e;font-family:Quicksand,CircularStd,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:500}p{font-family:Open sans;line-height:1.8rem}@media (min-width:768px){p{line-height:calc(1.8rem + ((6 * (100vw - 768px))/ 767))}}p{font-size:.9rem;margin-bottom:0;font-weight:500}p+*{margin-bottom:1rem}img{max-width:100%}body h1{font-size:3rem;font-weight:500}@media (min-width:400px) and (max-width:767.8px){body h1{letter-spacing:calc(-.25px + ((.13 * (100vw - 400px))/ 399))}}@media (min-width:768px){body h1{letter-spacing:calc(-.12px + ((.13 * (100vw - 768px))/ 767));line-height:calc(3rem + ((6 * (100vw - 768px))/ 767))}}@media (max-width:767.8px){body h1{font-size:2rem}}@media (max-width:767.8px) and (min-width:400px) and (max-width:767.8px){body h1{letter-spacing:calc(-.25px + ((.13 * (100vw - 400px))/ 399))}}@media (max-width:767.8px) and (min-width:768px){body h1{letter-spacing:calc(-.12px + ((.13 * (100vw - 768px))/ 767));line-height:calc(2rem + ((6 * (100vw - 768px))/ 767))}}body h2{font-size:2.1rem;font-weight:500}@media (min-width:400px) and (max-width:767.8px){body h2{letter-spacing:calc(-.25px + ((.13 * (100vw - 400px))/ 399))}}@media (min-width:768px){body h2{letter-spacing:calc(-.12px + ((.13 * (100vw - 768px))/ 767));line-height:calc(2.1rem + ((6 * (100vw - 768px))/ 767))}}@media (max-width:767.8px){body h2{font-size:1.7rem}}@media (max-width:767.8px) and (min-width:400px) and (max-width:767.8px){body h2{letter-spacing:calc(-.25px + ((.13 * (100vw - 400px))/ 399))}}@media (max-width:767.8px) and (min-width:768px){body h2{letter-spacing:calc(-.12px + ((.13 * (100vw - 768px))/ 767));line-height:calc(1.7rem + ((6 * (100vw - 768px))/ 767))}}body h5{font-size:1.2rem;font-weight:500}@media (min-width:400px) and (max-width:767.8px){body h5{letter-spacing:calc(-.25px + ((.13 * (100vw - 400px))/ 399))}}@media (min-width:768px){body h5{letter-spacing:calc(-.12px + ((.13 * (100vw - 768px))/ 767));line-height:calc(1.2rem + ((6 * (100vw - 768px))/ 767))}}@media (max-width:767.8px){body h5{font-size:1.1rem}}@media (max-width:767.8px) and (min-width:400px) and (max-width:767.8px){body h5{letter-spacing:calc(-.25px + ((.13 * (100vw - 400px))/ 399))}}@media (max-width:767.8px) and (min-width:768px){body h5{letter-spacing:calc(-.12px + ((.13 * (100vw - 768px))/ 767));line-height:calc(1.1rem + ((6 * (100vw - 768px))/ 767))}}.btn-lg{padding:.8rem 1.35rem;font-size:1.125rem}.section-container{padding:4rem}@media (max-width:768px){.section-container{padding:2rem}}.headers{font-weight:700;font-size:2.5rem;text-align:center}@media (max-width:768px){.headers{font-size:1.5rem}}a.cta-button{font-weight:500;font-size:1.5rem;padding:.9rem 1.5rem;border-radius:.25rem}@media (max-width:767.8px){a.cta-button{padding:.7rem 1.3rem;font-size:1rem}}.landing-section{position:relative}.landing-section .landing-text{text-align:center;z-index:2;position:relative}@media (min-width:991.8px){.landing-section .landing-text{margin-top:4rem}}@media (max-width:768px){.landing-section .landing-text{padding:1.5rem}}.landing-section .landing-text h1{font-weight:700;font-size:2rem}@media (min-width:768px){.landing-section .landing-text h1{font-size:3rem;letter-spacing:3px}}@media (min-width:1199.8px){.landing-section .landing-text h1{font-size:4.4rem}}.landing-section .landing-text p{font-size:1.5rem;padding:0 1rem}@media (max-width:991.8px){.landing-section .landing-text p{font-size:1.3rem}}@media (max-width:768px){.landing-section .landing-text p{font-size:1.2rem}}@media (max-width:576px){.landing-section .landing-text p{font-size:1.05rem}}.landing-section .landing-text p .beta-text{font-size:.5rem}.landing-section img{width:100%}.landing-section .desktop-animation{position:relative;margin-top:-10rem;min-width:200px;min-height:200px}@media (max-width:767.8px){.landing-section .desktop-animation{display:none}}.landing-section .mobile-animation{position:relative;margin-top:-8rem}.landing-section .mobile-animation:before{content:url(/static/images/external/homepage-images/front-mobile.svg)}@media (min-width:768px){.landing-section .mobile-animation{display:none}}.use-case-section{background-color:#f6f9fc}.use-case-section .use-case-header{text-align:center}.use-case-section .use-case-content{-ms-flex-pack:space-evenly;justify-content:space-evenly}.use-case-section .use-case-content .use-cases{text-align:center;padding:0 2rem}@media (min-width:1200px){.use-case-section .use-case-content .use-cases{padding:0 3rem}}.use-case-section .use-case-content .use-cases a{text-decoration:none}.use-case-section .use-case-content .use-cases a h5{color:#42536e;font-weight:700;font-size:1.6rem;margin-top:1rem}.use-case-section .use-case-content .use-cases a h5.last{margin-top:1.7rem}.use-case-section .use-case-content .use-cases a p{color:#42536e;font-size:14px;line-height:22.68px;margin-top:1rem}.use-case-section .use-case-content .use-cases img{width:100px;margin-bottom:.5rem}.testimonial-section{background-color:#f1f5f6}.testimonial-section .carousel-content{min-height:50vh;text-align:center;margin:0 auto}@media (min-width:768px){.testimonial-section .carousel-content{width:50%;min-height:40vh}}.testimonial-section .carousel-content img{height:100px;border-radius:50%}.move-in{opacity:0;transform:translate3d(0,100px,0);-webkit-backface-visibility:hidden;backface-visibility:hidden}
</style><link rel=preload href=/static/css/external/new_external/index-e621079639.css as=style onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel=stylesheet href=/static/css/external/new_external/index-e621079639.css></noscript><script>!function(n){"use strict";n.loadCSS||(n.loadCSS=function(){});var o=loadCSS.relpreload={};if(o.support=function(){var e;try{e=n.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),o.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.addEventListener?t.removeEventListener("load",a):t.attachEvent&&t.detachEvent("onload",a),t.setAttribute("onload",null),t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},o.poly=function(){if(!o.support())for(var t=n.document.getElementsByTagName("link"),e=0;e<t.length;e++){var a=t[e];"preload"!==a.rel||"style"!==a.getAttribute("as")||a.getAttribute("data-loadcss")||(a.setAttribute("data-loadcss",!0),o.bindMediaToggle(a))}},!o.support()){o.poly();var t=n.setInterval(o.poly,500);n.addEventListener?n.addEventListener("load",function(){o.poly(),n.clearInterval(t)}):n.attachEvent&&n.attachEvent("onload",function(){o.poly(),n.clearInterval(t)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:n.loadCSS=loadCSS}("undefined"!=typeof global?global:this);</script><link rel=amphtml href=https://www.formpl.us/amp/ ><!--Google Analytics tracking code--><script>
    function gMain() {
        (function (i,s,o,g,r,a,m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a,m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js','ga');
    
        ga('create', 'UA-35328807-1', 'formpl.us');
        ga('send', 'pageview');
    
        // Load the plugin.
        ga('require', 'linker');
    
        // Define which domains to autoLink.
        ga('linker:autoLink', ['fastspring.com']);
    }

    if (window.location.href.includes("https://www.formpl.us/")){
          window.addEventListener('load', (event) => {
            setTimeout(gMain, 5000)
        });
    }

</script><!-- Facebook Pixel Code --><script>
    function fbMain() {
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '616289371798400'); // Insert your pixel ID here.
        fbq('track', 'PageView');
        fbq('track', 'InitiateCheckout');
        fbq('track', 'CompleteRegistration');
    }

    window.addEventListener('load', (event) => {
        setTimeout(fbMain, 5000)
    });
</script><noscript><img height=1 width=1 style=display:none src=https://www.facebook.com/tr?id=616289371798400&ev=PageView&noscript=1></noscript><!-- DO NOT MODIFY --><!-- End Facebook Pixel Code --><script>
    var windowURL = window.location.href
    window.onerror = function (msg, url, lineNo, columnNo, error) {
        var data = JSON.stringify({
            url: windowURL,
            title: 'JS_ERR',
            message: (
                msg + '\nLineNo: ' + lineNo + ', ColumnNo: ' + columnNo +
                '\nError: ' + JSON.stringify(error)
            ),
            stacktrace: error.stack
        });
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/v1/public/log/error', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);

        return false;
    };

    var mainErrorLogger = console.error;
    console.error = function (title, errorObj, error) {
        var data = {
            url: windowURL,
            title: 'CONSOLE_ERR',
        }
        try {
            mainErrorLogger.apply(console, arguments);
        }
        catch(e) {
            console.log(title, errorObj, error)
        }
        // title can sometimes be the error plus the stack
        if (typeof title != 'string') {
            return
        }
        title = title.split('\n')
        var message = title.splice(0, 1)[0]
        var messageStack = title.join('\n')
        error = error ? error: new Error()
        data.message = message,
        data.stacktrace = messageStack + '\n' + error.stack 
        data.otherDetails = JSON.stringify(errorObj) + '\n\n' + JSON.stringify(error)
        data = JSON.stringify(data)

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/v1/public/log/error', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
    }
</script><script>

var statistics = {'forms': {'count': 128665.0, 'increment_every': 2161.0}, 'users': {'count': 124419.0, 'increment_every': 2235.0}, 'responses': {'count': 10142641.0, 'increment_every': 27.0}}

function updateStatistic(key){
    let stat = statistics[key].count
    let interval = statistics[key].increment_every

    window.setInterval(() => {
        var count = document.getElementById(key)
        stat++
        count.innerHTML = stat + '+'
      },interval * 1000)
  }

for (key in statistics){
    updateStatistic(key)
}

</script><!-- DO NOT MODIFY --><!-- Quora Pixel Code (JS Helper) --><script>
  function quoraMain() {
    !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
    qp('init', '24ed1a304a304af6a16f44327da4d6c9');
    qp('track', 'ViewContent');
    qp('track', 'Generic');
  }
  window.addEventListener('load', function(event) {
    setTimeout(quoraMain, 5000)
  });
  
</script><noscript><img height=1 width=1 style=display:none src=https://q.quora.com/_/ad/24ed1a304a304af6a16f44327da4d6c9/pixel?tag=ViewContent&noscript=1></noscript><!-- Intercom Messenger --><script>
  
  
  window.intercomSettings = {
    app_id: "z6j5bvkm"
  };
  
  
  function intercomMain() { 
    (function(){w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/z6j5bvkm';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}l();}})()
  }
  window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(intercomMain, 5000)
  });
</script><!-- End Intercom Messenger --></head> <body class="index  strip-top-body nav-top"> <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version=1.1 xmlns=http://www.w3.org/2000/svg> <defs> <symbol id=icon-social-facebook viewbox="0 0 24 24"> <title>social-facebook</title> <path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189 0.374-2.691 1.118-3.512 0.744-0.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-0.498 0-0.9 0.402-0.9 0.899v2.101z"></path> </symbol> <symbol id=icon-facebook viewbox="0 0 32 32"> <title>facebook</title> <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path> </symbol> <symbol id=icon-cloud viewbox="0 0 20 20"> <title>cloud</title> <path d="M20 11.32c0 2.584-2.144 4.68-4.787 4.68h-11.596c-1.998 0-3.617-1.584-3.617-3.537 0-1.951 1.619-3.535 3.617-3.535 0.146 0 0.288 0.012 0.429 0.027-0.037-0.246-0.057-0.498-0.057-0.756 0-2.871 2.381-5.199 5.32-5.199 2.407 0 4.439 1.562 5.096 3.707 0.263-0.043 0.532-0.066 0.809-0.066 2.642 0 4.786 2.093 4.786 4.679z"></path> </symbol> <symbol id=icon-lock viewbox="0 0 20 20"> <title>lock</title> <path d="M15.8 8h-1.8v-2.4c0-2.897-1.335-4.6-4-4.6s-4 1.703-4 4.6v2.4h-2c-0.553 0-1 0.646-1 1.199v7.801c0 0.549 0.428 1.139 0.951 1.307l1.197 0.387c0.524 0.167 1.402 0.306 1.952 0.306h5.8c0.549 0 1.428-0.139 1.951-0.307l1.196-0.387c0.524-0.167 0.953-0.757 0.953-1.306v-7.801c0-0.553-0.648-1.199-1.2-1.199zM12 8h-4v-2.801c0-1.445 0.797-2.199 2-2.199s2 0.754 2 2.199v2.801z"></path> </symbol> <symbol id=icon-google viewbox="0 0 20 20"> <title>google</title> <path d="M1.989 5.589c0 1.494 0.499 2.572 1.482 3.205 0.806 0.52 1.74 0.598 2.226 0.598 0.118 0 0.213-0.006 0.279-0.010 0 0-0.154 1.004 0.59 1.996h-0.034c-1.289 0-5.493 0.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695 0.061 0 0.097-0.002 0.097-0.002 0.008 0 0.063 0.002 0.158 0.002 0.497 0 1.782-0.062 2.975-0.643 1.548-0.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-0.533-0.469-0.994-0.873-0.994-1.266 0-0.4 0.337-0.701 0.762-1.082 0.689-0.615 1.339-1.492 1.339-3.15 0-1.457-0.189-2.436-1.354-3.057 0.121-0.062 0.551-0.107 0.763-0.137 0.631-0.086 1.554-0.184 1.554-0.699v-0.099h-4.599c-0.046 0.002-4.651 0.172-4.651 4.389zM9.413 14.602c0.088 1.406-1.115 2.443-2.922 2.574-1.835 0.135-3.345-0.691-3.433-2.096-0.043-0.676 0.254-1.336 0.835-1.863 0.589-0.533 1.398-0.863 2.278-0.928 0.104-0.006 0.207-0.012 0.31-0.012 1.699 0.001 2.849 0.999 2.932 2.325zM8.212 4.626c0.451 1.588-0.23 3.246-1.316 3.553-0.125 0.035-0.253 0.052-0.384 0.052-0.994 0-1.979-1.006-2.345-2.393-0.204-0.776-0.187-1.458 0.047-2.112 0.229-0.645 0.643-1.078 1.163-1.225 0.125-0.035 0.254-0.053 0.385-0.053 1.2 0 1.972 0.498 2.45 2.178zM16 8v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path> </symbol> <symbol id=icon-instagram viewbox="0 0 20 20"> <title>instagram</title> <path d="M17 1h-14c-1.1 0-2 0.9-2 2v14c0 1.101 0.9 2 2 2h14c1.1 0 2-0.899 2-2v-14c0-1.1-0.9-2-2-2zM9.984 15.523c3.059 0 5.538-2.481 5.538-5.539 0-0.338-0.043-0.664-0.103-0.984h1.581v7.216c0 0.382-0.31 0.69-0.693 0.69h-12.614c-0.383 0-0.693-0.308-0.693-0.69v-7.216h1.549c-0.061 0.32-0.104 0.646-0.104 0.984 0 3.059 2.481 5.539 5.539 5.539zM6.523 9.984c0-1.912 1.55-3.461 3.462-3.461s3.462 1.549 3.462 3.461-1.551 3.462-3.462 3.462c-1.913 0-3.462-1.55-3.462-3.462zM16.307 6h-1.615c-0.382 0-0.692-0.312-0.692-0.692v-1.617c0-0.382 0.31-0.691 0.691-0.691h1.615c0.384 0 0.694 0.309 0.694 0.691v1.616c0 0.381-0.31 0.693-0.693 0.693z"></path> </symbol> <symbol id=icon-twitter viewbox="0 0 20 20"> <title>twitter</title> <path d="M17.316 6.246c0.008 0.162 0.011 0.326 0.011 0.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-0.625-5.787-1.697 0.296 0.035 0.596 0.053 0.9 0.053 1.77 0 3.397-0.604 4.688-1.615-1.651-0.031-3.046-1.121-3.526-2.621 0.23 0.043 0.467 0.066 0.71 0.066 0.345 0 0.679-0.045 0.995-0.131-1.727-0.348-3.028-1.873-3.028-3.703 0-0.016 0-0.031 0-0.047 0.509 0.283 1.092 0.453 1.71 0.473-1.013-0.678-1.68-1.832-1.68-3.143 0-0.691 0.186-1.34 0.512-1.898 1.861 2.285 4.644 3.787 7.781 3.945-0.064-0.277-0.097-0.564-0.097-0.861 0-2.084 1.689-3.773 3.774-3.773 1.086 0 2.067 0.457 2.756 1.191 0.859-0.17 1.667-0.484 2.397-0.916-0.282 0.881-0.881 1.621-1.66 2.088 0.764-0.092 1.49-0.293 2.168-0.594-0.506 0.758-1.146 1.422-1.884 1.953z"></path> </symbol> <symbol id=icon-linkedin viewbox="0 50 512 512"> <title>linkedin</title> <path fill=#828282 d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
    C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
    M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
    c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
    s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/> </symbol> </defs> </svg> <!-- <link rel="stylesheet" src="assets/styles/external/new_external/nav-3601306387.css"> --> <div class="strip strip-flex" style="color: #373737; background-color: #E5EBF5;" title="Click here to view details"> <div class="strip-message strip-flex"> <div>Automatically send form responses to other applications you use with our Zapier integration🎉</div> <a href=https://zapier.com/apps/formplus/integrations style="
                                                        float: right;
                                                        font-size: inherit;
                                                        color: inherit;
                                                        font-weight: bolder;
                                                        margin-left: 2rem;
                                "> <button class="btn btn-primary btn-sm"> Connect Now </button> </a> </div> </div> <header class="header nav"> <nav class="navbar navbar-expand-lg justify-content-between strip-top"> <button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarSupportedContent aria-controls=navbarSupportedContent aria-expanded=false aria-label="Toggle navigation"> <span class="oi oi-menu" title=menu aria-hidden=true></span> </button> <a class=navbar-brand href=/ > <img src=/static/images/logo/formplus-logo.png width=130 alt="FormPlus Logo"> </a> <a href="/auth?signin='true'" class="d-lg-none navbar-toggle btn btn-secondary collapsed white" aria-expanded=false> Log in </a> <div class="collapse navbar-collapse" id=navbarSupportedContent> <div class="navbar-nav ml-auto align-items-start"> <div class=menu-container> <div class="nav-item nav-link  solution" onclick="displayMegaMenu('solution')"> Solution <span class="oi oi-chevron-bottom"></span> </div> <div class="megamenu solution" id=solution> <div class=submenu> <ul class=submenu-item> <li> <a href=/survey-forms>Online Surveys</a> </li> <li> <a href=/data-collection>Data Collection</a> </li> <li> <a href=/registration-forms>Registration Form</a> </li> <li> <a href=/application-forms>Application Form</a> </li> <li> <a href=/e-signature-forms>E-Signature</a> </li> <li> <a href=/booking-forms>Booking/Reservations</a> </li> </ul> <ul class=submenu-item> <li> <a href=/payment-forms>Payment Forms</a> </li> <li> <a href=/order-forms>Order Forms</a> </li> <li> <a href=/offline-forms>Offline Forms</a> </li> <li> <a href=/contact-forms>Contact Forms</a> </li> <li> <a href=/sign-up-forms>Sign-Up Forms</a> </li> </ul> </div> </div> </div> <div class=menu-container> <a class="nav-item nav-link " href=/templates target=_self> Templates </a> </div> <div class=menu-container> <a class="nav-item nav-link " href=/features target=_self> Features <span class="oi oi-chevron-bottom feature" onclick="displayMegaMenu('feature')"></span> </a> <div class="megamenu feature" id=feature> <div class=submenu> <ul class=submenu-item> <p>Security</p> <li> <a href=/features/gdpr>GDPR Compliant </a> </li> <li> <a href=/features/private-forms>Private Forms</a> </li> <li> <a href=/payments>PCI Complaint</a> </li> <li> <a href=/features/subdomain>Subdomain</a> </li> <li> <a href=/features/secure-forms>Secure Form</a> </li> </ul> <ul class=submenu-item> <p>Form Options</p> <li> <a href=/features/electronic-signatures>Digital signature</a> </li> <li> <a href=/features/mobile-forms>Mobile Forms</a> </li> <li> <a href=/features/geolocation>Location Enabled Forms</a> </li> <li> <a href=/features/multi-page-forms>Multi-Page Form</a> </li> <li> <a href=/features/form-customisation>Customization</a> </li> </ul> <ul class=submenu-item> <p>Integrations</p> <li> <a href=/features/sheet-integration>Google Sheet Integrations</a> </li> <li> <a href=/payments>Payment</a> </li> <li> <a href=/features/cloud-storage>Cloud Storage</a> </li> <li> <a href=/features/zapier-integration>Zapier Integration</a> </li> </ul> <ul class=submenu-item> <p>Teams &amp; Analytics</p> <li> <a href=/features/multiple-users>Multiple users and Teams</a> </li> <li> <a href=/features/analytics>Form Analytics</a> </li> <li> <a href=/features/data-import-export>Data Import &amp; Export</a> </li> </ul> <ul class=submenu-item> <p>Sharing Options</p> <li> <a href=/features/embed-form-in-website>Embeddable Forms</a> </li> <li> <a href=/features/customized-form-links>Custom Form Link</a> </li> <li> <a href=https://help.formpl.us/s/article/a-guide-to-embedding-your-forms-on-wordpress>Wordpress Form Embed</a> </li> </ul> <ul class=submenu-item> <p>Notifications</p> <li> <a href=/features/track-email-invitation>Email Invitation</a> </li> <li> <a href=/features/email-confirmations>Confirmation Emails</a> </li> <li> <a href=/features/email-notifications>Notify Teammates</a> </li> <li> <a href=/features/email-notifications>Periodic Notification</a> </li> <li> <a href=/features/document-merge>Document Merge</a> </li> </ul> </div> </div> </div> <div class=menu-container> <div class="nav-item nav-link  resources" onclick="displayMegaMenu('resources')"> Resources <span class="oi oi-chevron-bottom"></span> </div> <div class="megamenu resources" id=resources> <div class=submenu> <ul class=submenu-item> <li> <a href=/blog>Blog</a> <div>Information, how-to and guides to data collection and surveys.</div> </li> <li> <a href=/resources>Resources</a> <div>Questionnaire examples and project ideas</div> </li> <li> <a href=https://help.formpl.us>Support</a> <div>All the help you need on using Formplus</div> </li> </ul> </div> </div> </div> <div class=menu-container> <a class="nav-item nav-link " href=/pricing target=_self> Pricing </a> </div> <a href="/auth?signin='true'" class="btn btn-secondary">Log in</a> <a href=/auth class="btn btn-primary signup-button">Sign up</a> </div> </div> </nav> </header> <script type=text/javascript>
        window.addEventListener('DOMContentLoaded', function () {
                window.displayMegaMenu = function displayMegaMenu(item){
                        var allMenu = document.querySelector(".megamenu." + item);
                        if (allMenu.style.display == "none"){
                                allMenu.style.display = "block"
                        } 
                        else {
                                allMenu.style.display = "none"
                        }
                }
        })
</script> <section> <div class="pt-4 landing"> <div class=landing-section> <div class=landing-text> <h1>Let forms do the work</h1> <br> <p>Switch to a paperless office with functional online and offline<em class=beta-text>(beta)</em> forms </p> <br> <a href=/auth class="btn btn-success btn-lg cta-button">Get Started for Free</a> </div> <div class=desktop-animation> <img data-src=/static/images/external/homepage-images/desktop-animation.svg class=b-lazy src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== alt="Landing Animation"> </div> <div class=mobile-animation></div> </div> </div> <div class="section-container use-case-section"> <div class="mt-3 use-case-header move-in"> <h2 class=headers> Collect The Information You Need </h2> </div> <div class="row use-case-content move-in"> <div class="col-sm-12 col-md-4 mt-5 use-cases"> <a href=/data-collection> <img data-src=/static/images/external/homepage-images/survey-maker.png class=b-lazy src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== alt="Online Forms"> <h5>Online Survey maker</h5> <p> Get incredible insights. Design beautiful online surveys to collect data from customers, employees, and research. </p> </a> </div> <div class="col-sm-12 col-md-4 mt-5 use-cases"> <a href=/survey-forms> <img data-src=/static/images/external/homepage-images/online-form.png class=b-lazy src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== alt=Data-collection> <h5>Create Online Forms</h5> <p> Save time and effort with formplus. With our customisation and multiple field options, you CAN create online forms for applications, payments, registration, and more! </p> </a> </div> <div class="col-sm-12 col-md-4 mt-5 use-cases"> <a href=/pdf-builder> <img data-src=/static/images/external/homepage-images/pdf-form.png class=b-lazy src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== alt=Surveys> <h5 class=last>PDF Builder</h5> <p> Use formplus pdf builder to create downloadable pdf documents, such as legal contracts, quizzes, questionnaires, forms and many more! </p> </a> </div> </div> </div> <div class="pb-5 section-container testimonial-section"> <div id=carouselExampleIndicators class="carousel slide" data-ride=carousel> <div class=carousel-inner> <div class="carousel-item active"> <div class=carousel-content> <img src=/static/images/external/ai-extracts/faces/mcam.svg alt="MCAM NorthWest"> <p class=mt-2> We are able to be more organized internally and more efficient in processing our customer requests since we started using Formplus. Their customer service has been excellent the few times we've had questions, and we appreciate the support and updates they provide </p> <p class=customer-name>MCAM</p> <p class=business-name>MCAM NorthWest</p> </div> </div> <div class=carousel-item> <div class=carousel-content> <img src=/static/images/external/ai-extracts/faces/sarah-career-consultant.svg alt="Career Consultants"> <p class=mt-2> Formplus has increased our reach and interactions with clients enabling us to respond and advise clients on next action steps quickly </p> <p class=customer-name>Sarah Berry</p> <p class=business-name>Career Consultants</p> </div> </div> <div class=carousel-item> <div class=carousel-content> <img src=/static/images/external/ai-extracts/faces/gensol.svg alt=Gensol> <p class=mt-2> We use Formplus for employee half-yearly performance appraisals. The dynamic questions based on another question feature helped us, which many forms in the market don't have. Its ability to sync with Google Sheet helped us in creating deep analysis and helped in making individual reports. </p> <p class=customer-name>Vishnu</p> <p class=business-name>Gensol</p> </div> </div> <div class=carousel-item> <div class=carousel-content> <img src=/static/images/external/ai-extracts/faces/pab.svg alt="Pennsylvania Academy of Ballet"> <p class=mt-2> We use Formplus for online registration of ballet classes and programs. Formplus enabled us to gather relevant information from our customers and allowed them to register and pay for classes online一completely contactless! This was absolutely critical during the COVID-19 shutdown. </p> <p class=customer-name>PAB</p> <p class=business-name>Pennsylvania Academy of Ballet</p> </div> </div> <div class=carousel-item> <div class=carousel-content> <img src=/static/images/external/brand-logos/yellow-dandelion.webp alt="Yellow Dandelion Logo"> <p class=mt-2> I found Formplus and looked at the specifications, capabilities and the fact that it allowed file uploads. I played around for a bit, got it to work the way I wanted it to, and I knew that it was a great starting point. </p> <p class=customer-name>Amanda</p> <p class=business-name>Yellow Dandelion</p> </div> </div> <div class=carousel-item> <div class=carousel-content> <img src=/static/images/external/brand-logos/polk-edu.png alt="Polk State Lakeland Collegiate Logo"> <p class=mt-2> Using Formplus has decreased our time and cost ten times over: we have saved ourselves some paper and the cost of printing out paper applications. This also means that we can access data much quicker and documents can easily be uploaded for review before we accept students in our school. It is also 100% faster to obtain enrollment applications. </p> <p class=customer-name>Virginia</p> <p class=business-name>Polk State College Charter Schools</p> </div> </div> </div> <a class=carousel-control-prev href=#carouselExampleIndicators role=button data-slide=prev> <span class=carousel-control-prev-icon aria-hidden=true></span> <span class=sr-only>Previous</span> </a> <a class=carousel-control-next href=#carouselExampleIndicators role=button data-slide=next> <span class=carousel-control-next-icon aria-hidden=true></span> <span class=sr-only>Next</span> </a> </div> </div> <!-- <div class="section-container statistics">
        <div class="row statistics-content">
             
                  <div class="mt-5 mb-5 col-sm-12 col-md-6 col-lg-4 stat">
                  <h2 id="forms">128665+</h2>  
                    
                     <p>Forms created</p>
                        
               </div>
            
                  <div class="mt-5 mb-5 col-sm-12 col-md-6 col-lg-4 stat">
                  <h2 id="users">124419+</h2>  
                    
                     <p>Trusted users</p>
                        
               </div>
            
                  <div class="mt-5 mb-5 col-sm-12 col-md-6 col-lg-4 stat">
                  <h2 id="responses">10142641+</h2>  
                    
                    <p>Received responses</p>
                    
               </div>
            
        </div>

    </div> --> <div class="section-container features"> <div class="pt-5 feature-group"> <h2 class=headers>Powerful form building solution for everyone</h2> <div class=feature-groupings> <div class="row feature-group-content"> <div class="mt-5 mb-5 col-sm-12 col-md-6 col-lg-4 move-in"> <div class="mb-4 feature-icon"> <span class="oi oi-code"></span> </div> <h4>No-Code Forms</h4> <p> With 20+ field types and hundreds of form templates, you too can create beautiful well-tailored online forms in no time. Calculate scores, collect signatures, and receive files with responsive online forms optimized for mobile. </p> </div> <div class="mt-5 mb-5 col-sm-12 col-md-6 col-lg-4 move-in"> <div class="mb-4 feature-icon"> <span class="oi oi-bolt"></span> </div> <h4>Create Supercharged Web Forms</h4> <p> Connect forms to popular apps like Google Sheets, Google Drive, Microsoft OneDrive, and Dropbox with just a click! Formplus integrates with these native apps to help you work the way you want. </p> </div> <div class="mt-5 mb-5 col-sm-12 col-md-6 col-lg-4 move-in"> <div class="mb-4 feature-icon"> <span class="oi oi-fork"></span> </div> <h4>Do More With Form data</h4> <p> Make graphs from form entries, and translate submitted data into charts using key metrics. Monitor form performance and identify traffic source and location with Formplus Analytics. </p> </div> <div class="mt-5 mb-5 col-sm-12 col-md-6 col-lg-4 move-in"> <div class="mb-4 feature-icon"> <span class="oi oi-map-marker"></span> </div> <h4>Share Forms Anywhere</h4> <p> Prefer to share secure form links to receive responses or embed your form on your website? Either way, Formplus forms are responsive and can be filled from any device. </p> </div> <div class="mt-5 mb-5 col-sm-12 col-md-6 col-lg-4 move-in"> <div class="mb-4 feature-icon"> <span class="oi oi-volume-high"></span> </div> <h4>Notify Those That Matter</h4> <p> Send customized emails to the people that need it. Easily convert form data to PDF files and share with respondents </p> </div> <div class="mt-5 mb-5 col-sm-12 col-md-6 col-lg-4 move-in"> <div class="mb-4 feature-icon"> <span class="oi oi-clock"></span> </div> <h4>Save Time and Collaborate</h4> <p> Invite your team to your account, assign roles and permissions to team members, granting them editing, viewing or sharing access. </p> </div> </div> </div> </div> </div> <div class="section-container integrations-wrapper move-in"> <h2 class="mt-8 mb-12 headers">Integrations to power your forms</h2> <div class="mb-5 row integrations"> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-drive.svg alt="Google Drive"> <p>Google Drive</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-sheets.svg alt="Google Sheets"> <p>Google Sheets</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/dropbox.svg alt=Dropbox> <p>Dropbox</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/trello.svg alt=Trello> <p>Trello</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/slack.svg alt=Slack> <p>Slack</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/salesforce.svg alt=Salesforce> <p>Salesforce</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/airtable.svg alt=Airtable> <p>Airtable</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/mailchimp.svg alt=Mailchimp> <p>Mailchimp</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/discord.svg alt=Discord> <p>Discord</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/asana.svg alt=Asana> <p>Asana</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/freshdesk.svg alt=FreshDesk> <p>FreshDesk</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/wordpress.svg alt=Wordpress> <p>Wordpress</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/basecamp.svg alt=Basecamp> <p>Basecamp</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/sms-by-zapier.svg alt="SMS by Zapier"> <p>SMS by Zapier</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-contacts.svg alt="Google Contacts"> <p>Google Contacts</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-drive.svg alt="Google Drive"> <p>Google Drive</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-sheets.svg alt="Google Sheets"> <p>Google Sheets</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/dropbox.svg alt=Dropbox> <p>Dropbox</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/trello.svg alt=Trello> <p>Trello</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/slack.svg alt=Slack> <p>Slack</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/salesforce.svg alt=Salesforce> <p>Salesforce</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/airtable.svg alt=Airtable> <p>Airtable</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/mailchimp.svg alt=Mailchimp> <p>Mailchimp</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/discord.svg alt=Discord> <p>Discord</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/asana.svg alt=Asana> <p>Asana</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/freshdesk.svg alt=FreshDesk> <p>FreshDesk</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/wordpress.svg alt=Wordpress> <p>Wordpress</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/basecamp.svg alt=Basecamp> <p>Basecamp</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/sms-by-zapier.svg alt="SMS by Zapier"> <p>SMS by Zapier</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-contacts.svg alt="Google Contacts"> <p>Google Contacts</p> </div> </div> <div class="row integrations reverse"> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/breezy.svg alt="Breezy HR"> <p>Breezy HR</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/stripe.svg alt=Stripe> <p>Stripe</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/mysql.svg alt=MySQL> <p>MySQL</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/flutterwave.svg alt=Flutterwave> <p>Flutterwave</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/paystack.svg alt=Paystack> <p>Paystack</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/paypal.svg alt=Paypal> <p>Paypal</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/active-campaign.svg alt="Active Campaign"> <p>Active Campaign</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-calendar.svg alt="Google Calendar"> <p>Google Calendar</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/gmail.svg alt=Gmail> <p>Gmail</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/twilio.svg alt=Twilio> <p>Twilio</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/twitter.svg alt=Twitter> <p>Twitter</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/acuity.svg alt="Acuity Scheduling"> <p>Acuity Scheduling</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/zendesk.svg alt=Zendesk> <p>Zendesk</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/webhooks.svg alt=Webhooks> <p>Webhooks</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/keap.svg alt=Keap> <p>Keap</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/podio.svg alt=Podio> <p>Podio</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-docs.svg alt="Google Docs"> <p>Google Docs</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/breezy.svg alt="Breezy HR"> <p>Breezy HR</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/stripe.svg alt=Stripe> <p>Stripe</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/mysql.svg alt=MySQL> <p>MySQL</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/flutterwave.svg alt=Flutterwave> <p>Flutterwave</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/paystack.svg alt=Paystack> <p>Paystack</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/paypal.svg alt=Paypal> <p>Paypal</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/active-campaign.svg alt="Active Campaign"> <p>Active Campaign</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-calendar.svg alt="Google Calendar"> <p>Google Calendar</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/gmail.svg alt=Gmail> <p>Gmail</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/twilio.svg alt=Twilio> <p>Twilio</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/twitter.svg alt=Twitter> <p>Twitter</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/acuity.svg alt="Acuity Scheduling"> <p>Acuity Scheduling</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/zendesk.svg alt=Zendesk> <p>Zendesk</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/webhooks.svg alt=Webhooks> <p>Webhooks</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/keap.svg alt=Keap> <p>Keap</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/podio.svg alt=Podio> <p>Podio</p> </div> <div class=integration-container> <img src=https://storage.googleapis.com/fplsblog/google-docs.svg alt="Google Docs"> <p>Google Docs</p> </div> </div> <div class=cta-container> <a href=/features/zapier-integration class="btn btn-secondary btn-lg more-button"> See more </a> </div> </div> <div class="section-container logo-section mt-5"> <h2 class=headers> <span>Trusted Users</span></h2> <div class="row move-in mt-5 align-items-center"> <div class="col-6 col-md-4 col-lg-2 logo-images"> <img data-src=https://storage.googleapis.com/fplsblog/fair-trade.svg class=b-lazy src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== alt="Fair Trade Federation"> </div> <div class="col-6 col-md-4 col-lg-2 logo-images"> <img src=https://storage.googleapis.com/fplsblog/seattle-times.svg alt="Seattle Times"> </div> <div class="col-6 col-md-4 col-lg-2 logo-images"> <img data-src="https://storage.googleapis.com/fplsblog/l'oreal.svg" class=b-lazy src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== alt="l'oreal Luxe"> </div> <div class="col-6 col-md-4 col-lg-2 logo-images"> <img data-src=https://storage.googleapis.com/fplsblog/und.svg class=b-lazy src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== alt="University of Notre Dame"> </div> <div class="col-6 col-md-4 col-lg-2 logo-images"> <img data-src=https://storage.googleapis.com/fplsblog/grab-1.svg class=b-lazy src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== alt=Grab> </div> <div class="col-6 col-md-4 col-lg-2 logo-images"> <img data-src=https://storage.googleapis.com/fplsblog/red-bull.svg class=b-lazy src=data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw== alt="Red Bull"> </div> </div> </div> <div class="mt-5 section-container submission-count move-in"> <div> <h2> More Than Just Data</h2> <p> Build forms, receive quality responses, create charts, track form performance and more with Formplus </p> </div> <div class=mt-5> <a href=/auth class="btn btn-success btn-lg cta-button">Get Started for Free</a> </div> </div> </section> <footer> <div class=container-fluid> <div class=row> <div class="col-md-6 col-lg-3 footer-section footer-section-social order-last"> <div class=footer-logo> <img src=/static/images/logo/Small-White.png width=150 alt="FormPlus Logo"> </div> <br> <div class="social-icons justify-content-center justify-content-lg-start"> <a href=https://www.facebook.com/formplusapp class=social target=_blank> <svg class="icon icon-cloud"><use xlink:href=#icon-social-facebook></use></svg><span class=name></span> </a> <a href=https://twitter.com/formplusapp class=social target=_blank> <svg class="icon icon-twitter-with-circle"><use xlink:href=#icon-twitter></use></svg><span class=name></span> </a> <a href=https://www.instagram.com/formplusapp/ class=social target=_blank> <svg class="icon icon-instagram"><use xlink:href=#icon-instagram></use></svg><span class=name></span> </a> <a href=https://www.linkedin.com/company/formplus class=social target=_blank> <svg class="icon icon-linkedin"><use xlink:href=#icon-linkedin></use></svg><span class=name></span> </a> </div> </div> <div class="col-md-4 col-lg-3 footer-section"> <span>Product Pages</span> <div><a href=/application-forms>Application Forms</a></div> <div><a href=/booking-forms>Booking Forms</a></div> <div><a href=/payment-forms>Payment Forms</a></div> <div><a href=/survey-forms>Survey Forms</a></div> <div><a href=/order-forms>Order Forms</a></div> <div><a href=/quiz-maker>Quiz Maker</a></div> <div><a href=/registration-forms>Registration Forms</a></div> <!-- <div><a href="/approval-workflow-forms">Approvals and Workflows</a></div> --> </div> <div class="col-md-4 col-lg-3 footer-section"> <span>Quick Links</span> <div><a href=/auth>Sign up</a></div> <div><a href="/auth?signin='true'">Log in</a></div> <div><a href=/pricing>Pricing</a></div> <div><a href=https://help.formpl.us/s/ >Support</a></div> <div><a href=/form/926396118>Contact Us</a></div> </div> <div class="col-md-4 col-lg-3 footer-section"> <span>Resources</span> <div><a href=/resources>Resources</a></div> <div><a href=/templates>Templates</a></div> <div><a href=/case-studies>Customers</a></div> <div><a href=/convince-your-team>Convince your team</a></div> <div><a href=https://www.formpl.us/form/31606002 target=_blank rel="noopener noreferrer">Enterprise Solutions</a></div> <div><a href=/sitemap>Sitemap</a></div> </div> <div class="offset-md-3 offset-lg-0"></div> </div> </div> <hr> <div class="container-fluid bottom-section"> <div class=row> <div class="col-12 col-md-6"> <div class=row> <div class="col-12 col-sm-4"><a href=https://help.formpl.us/s/topic/0TO6g000000U09OGAS/faqs>FAQ</a></div> <div class="col-12 col-sm-4"><a href=/terms-and-privacy#privacy>Privacy Policy</a></div> <div class="col-12 col-sm-4"><a href=/terms-and-privacy>Terms &amp; Conditions</a></div> </div> </div> <div class="offset-sm-3 offset-md-0"></div> <div class="col-12 col-sm-6 col-md-6 order-md-first">All Rights Reserved &copy; Formplus <span class=footer-year></span></div> </div> </div> </footer> <script src=https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js></script> <script src=/static/js/base-c93cd24382.js></script> <script>
      ;(function() {
          var bLazy = new Blazy();
      })();
    </script> <script src=/static/js/new_external/js/otherExternal-b8a146c85f.js></script> <script type=text/javascript>
      window.onload = function() {
        var  windowURL = new URL(window.location.href)
        if (!windowURL.searchParams) return
        var cdnReloadCount = Number(windowURL.searchParams.get("cdn_reload"))
        if (!window.jQuery || !window.Blazy || !window.check_if_in_view) {
          if (cdnReloadCount < 2){
            windowURL.searchParams.set("cdn_reload", cdnReloadCount +1)
            window.location.replace(windowURL.toLocaleString())
          }
        }      
      }
    </script> <!-- Lazy Load font and CSS files --> <script type=text/javascript>
      var cb = function() {
        var styleTags = document.querySelectorAll('head style');
        var h = styleTags[styleTags.length - 1];
        var footer = document.querySelector('.footer-year');
        var d = document.createDocumentFragment();
        var l = document.createElement('link'); l.rel = 'stylesheet';
        l.href = 'https://fonts.googleapis.com/css?family=Quicksand:400,500,700|Open+Sans';
  
        var a = document.createElement('link'); a.rel = 'stylesheet';
        a.href = "/static/css/external/new_external/purged/base-4888399e14.css";
  
        var currentYear = new Date().getFullYear();

        d.appendChild(l);
        d.appendChild(a);
        h.parentNode.insertBefore(d, h.nextSibling);
        footer.textContent = currentYear;
      }

      var scroll = function() {
        var navbar = document.querySelector('nav.navbar');
        var navbarHeight = navbar.clientHeight
        window.addEventListener('scroll', function () {
          if ( window.scrollY > 0 ) {
            navbar.classList.add('fixed-top');
            navbar.parentNode.style.height = navbarHeight
          } else {
            navbar.classList.remove('fixed-top');
            navbar.parentNode.style.height = "auto"
          }
        })
      }

      window.addEventListener('DOMContentLoaded', function () {
        cb();
        
      })
    </script> </body> </html>
`