<template lang="pug">
.footer(:class='{"footer--light": path === "use-cases" || path === "pricing" || path === "solutions", "footer--hide": path === "signin" || path === "signup" || path === "get-access" || path === "thank-you" || path === "register"}')
  .container
    .footer__wrapper
      .footer__col.footer__col--big
        svg.footer__logo(viewbox='0 0 43 43' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink')
          g#moderneFooter(stroke='none' stroke-width='1' fill='none' fill-rule='evenodd')
            g#moderneFooter__inner(transform='translate(-186.000000, -5929.000000)')
              g#moderneFooter__group(transform='translate(0.000000, 5693.000000)')
                g#moderneFooter__img(transform='translate(186.000000, 235.000000)')
                  g#moderneFooter__group-2(fill='#DE9CD7')
                    circle#moderneFooter__mask(cx='21.0525002' cy='22.0525002' r='21.0525002')
                  g#moderneFooter__text(transform='translate(12.075000, 9.190000)')
                    path#moderneFooter__text-1(d='M0.384155857,5.77500005 L17.927248,5.77500005 C17.927248,5.77500005 18.8114359,-0.853880182 10.5982488,2.00295336 C7.37440776,3.12344796 5.88162296,-0.993585615 2.7266797,0.229549705 C-1.40144442,1.83188549 0.384155857,5.77500005 0.384155857,5.77500005' fill='#FFFFFF')
                    path#moderneFooter__text-2(d='M12.645249,12.9319276 C12.7261647,12.4186684 12.8371012,11.9105119 12.9774968,11.4100318 C13.396418,9.93685955 8.49937395,10.042905 6.87858237,10.4441582 C5.76916354,10.7307675 6.14185893,11.9316609 6.52033254,12.6940418 C2.92236615,14.0065807 0.760965682,17.6586157 1.35894089,21.4150461 C1.9569161,25.1714766 5.14755899,27.9850568 8.97814788,28.1338332 C12.8087368,28.2826095 16.2113515,25.725105 17.1035404,22.026551 C17.9957293,18.3279971 16.1287613,14.5195042 12.645249,12.9319276' fill='#FFFFFF')
                    path#moderneFooter__text-3(d='M15.4350001,6.35892411 C15.4350001,7.17259498 14.7535001,6.67354351 13.9125001,6.67354351 C13.0715001,6.67354351 12.3900001,7.17259498 12.3900001,6.35892411 C12.3900001,5.85020505 12.6801869,5.38012924 13.1512501,5.1257697 C13.6223132,4.87141016 14.202687,4.87141016 14.6737501,5.1257697 C15.1448133,5.38012924 15.4350001,5.85020505 15.4350001,6.35892411' fill='#212126')
                    path#moderneFooter__text-4(d='M11.8649139,12.2737717 C11.8694679,12.5720251 11.69331,12.8434527 11.4190557,12.9607587 C11.1448014,13.0780648 10.8268472,13.0179824 10.614309,12.8086895 C10.4017708,12.5993965 10.3368042,12.2824048 10.4498775,12.0063788 C10.5629508,11.7303529 10.8316368,11.5500405 11.1299255,11.5500001 C11.5321276,11.5484382 11.8602939,11.8715938 11.8649139,12.2737717' fill='#212126')
                    path#moderneFooter__text-5(d='M9.34450141,12.403576 C9.30870078,12.8280456 8.94136958,13.1471445 8.51541831,13.1237967 C8.08946704,13.1004488 7.75932127,12.7431188 7.7702644,12.3172867 C7.78120754,11.8914546 8.12927222,11.5515028 8.5558621,11.5500001 C9.00848343,11.5708464 9.36008603,11.9514 9.34450141,12.403576' fill='#212126')
                    path#moderneFooter__text-6(d='M5.98500005,5.93250005 C5.98500005,6.65737379 5.39737378,7.24500006 4.67250004,7.24500006 C3.9476263,7.24500006 3.36000003,6.65737379 3.36000003,5.93250005 C3.36000003,5.20762631 3.9476263,4.62000004 4.67250004,4.62000004 C5.39737378,4.62000004 5.98500005,5.20762631 5.98500005,5.93250005' fill='#212126')
                    path#moderneFooter__text-7(d='M10.1845032,22.9005997 C10.1502596,23.3259721 9.78298749,23.6467025 9.35629939,23.6238514 C8.92961129,23.6010004 8.59878933,23.2428839 8.61029109,22.8162937 C8.62179285,22.3897034 8.97143256,22.0498859 9.39873369,22.0500002 C9.84970798,22.0707739 10.2000311,22.4500005 10.1845032,22.9005997' fill='#212126')
        | Moderne © 2020
      .footer__nav
        .footer__nav-col
          nuxt-link.footer__nav-link(v-for='(item, index) in menu_1' :key="index" :to="item.link")
            | {{item.title}}
            span(v-if="item.label") {{item.label}}
          a.footer__nav-link(rel="noreferrer" :href="`mailto:${emailFooter}`") Contact us
        .footer__nav-col
          nuxt-link.footer__nav-link(v-for='(item, index) in menu_2' :key="index" :to="item.link")
            | {{item.title}}
            span(v-if="item.label") {{item.label}}
        .footer__nav-col
          a.footer__nav-link(rel="noreferrer" v-for='(item, index) in menu_3' :key="index" :href="item.link" target="_blank")
            | {{item.title}}
            span(v-if="item.label") {{item.label}}
        .footer__nav-col
          a.footer__nav-link(rel="noreferrer" href="https://www.notion.so/norde/Moderne-Open-Positions-fd7af9d42ad5473bac1564b7597764a3" target="_blank") Careers
          nuxt-link.footer__nav-link(v-for='(item, index) in menu_4' :key="index" :to="item.link")
            | {{item.title}}
            span(v-if="item.label") {{item.label}}
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      emailFooter: 'mila@moderne.st',
      menu_1: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Overview',
          link: '/overview'
        },
        {
          title: 'Pricing',
          link: '/pricing'
        }
        // {
        //   title: 'Status',
        //   link: '#'
        // }
      ],
      menu_2: [
        {
          title: 'For Agencies',
          link: '/solutions/for-agencies'
        },
        {
          title: 'For Brands',
          link: '/solutions/for-brands'
        },
        {
          title: 'For Startups',
          link: '/solutions/for-startups'
        }
      ],
      menu_2_2: [
        {
          title: 'Contact by email',
          link: 'mailto:mila@moderne.st'
        }
      ],
      menu_3: [
        {
          title: 'Twitter',
          link: 'https://twitter.com/moderne_st'
        },
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/company/moderne'
        },
        {
          title: 'Facebook',
          link: 'https://www.facebook.com/mdrnst/'
        },
        {
          title: 'Instagram',
          link: '#'
        }
      ],
      menu_4: [
        {
          title: 'About Us',
          link: '/our-story'
        },
        // {
        //   title: 'Careers',
        //   link: '#',
        //   out: true
        //   // label: 3
        // },
        {
          title: 'Legal',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "./_footer.scss";
</style>
