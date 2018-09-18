<template>
  <transition name="fade">
    <main class="main">
      <section class="section prices-page">
        <div class="grid">
          <section-heading
             :sectionTitle="pageTitle"
             :sectionDescription="pageDescription"
          ></section-heading>
          <div class="grid__row">
            <table class="table col-xs-12">
              <thead class="table__head"><tr>
                <th class="table__cell table__cell--header"
                    v-for="columnName in tableHead"
                    :key="columnName.id">
                  <span>{{columnName}}</span>
                </th>
              </tr></thead>
              <tbody class="table__body">

              <tr class="table__row--with-content"
                  v-for="itemPrice in prices"
                  :key="itemPrice.id">

                <td class="table__cell"
                    :colspan="itemPrice.colspan"
                    valign="middle">

                  <h4 class="table__cell_content">{{itemPrice.activity}}</h4>

                  <table class="table table--subtable"
                         v-if="itemPrice.subTable"
                         v-show="itemPrice.expanded"><tbody>

                    <tr v-for="sub in itemPrice.subTable"
                        class="table__row">
                      <td class="table__cell table__cell--body" valign="top">
                        {{sub.activity}}
                      </td>
                      <td class="table__cell table__cell--body table__cell--price" valign="top">
                        {{itemPrice.priceFrom}}
                        <strong class="price">{{sub.price}}</strong>
                        {{itemPrice.pricePer}}
                      </td>
                      <td class="table__cell table__cell--body" valign="top">
                        {{sub.description}}
                      </td>
                    </tr>

                  </tbody></table>
                </td>
              </tr></tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  </transition>
</template>

<script>

  import sectionHeading from '@/components/Sections/TheSectionHeading';

  export default {
    name: 'ContactsPage',
    components: {
      sectionHeading,
    },
    beforeRouteEnter(to, from, next) {
      console.log('Enter');
      next()
    },
    data() {
      return {
        pageTitle: 'Prices list',
        pageDescription: '',
        tableHead: ["Activity", "Price", "Description"],
        prices: [
          {
            activity: 'Work on the site completely',
            colspan: "3",
            expanded: "true",
            pricePer: '/hour',
            subTable: [{
              activity: 'Develop markup from scratch',
              price: '$10',
              description: 'You have only the layouts from the designer. I can choose technology stack'
            }, {
              activity: 'Implement redesign to an existing project',
              price: '$16',
              description: 'If you think that your website needs the new design and you want me to implement this, please at first check out my technology stack'
            }, {
              activity: 'Implement full layout to an existing project',
              price: '$10',
              description: 'This means that you already have a working application and layouts from the designer, but it is not implemented as markup'
            }, {
              activity: 'Support for existing project',
              price: '$8',
              description: 'Fixing existing bugs or implement new features'
            }],
          },
          {
            activity: 'Realization of single component',
            colspan: "3",
            expanded: "true",
            priceFrom: 'from',
            subTable: [{
              activity: 'Dropdown',
              price: '$30',
              description: 'Dropdown component with full accessibility from keyboard'
            }, {
              activity: 'Data table',
              price: '$60',
              description: 'Fully responsive data table, with interactive elements if you need'
            }, {
              activity: 'Form components',
              price: '$15',
              description: 'Include realization sinle form components as input fields, checkbox and radio button, file uploader and etc.'
            }, {
              activity: 'Photo Gallery',
              price: '$120',
              description: 'Adaptive gallery with full accessibility'
            }],
          },
          {
            activity: 'Mentoring',
            colspan: "3",
            expanded: "true",
            pricePer: '/week',
            subTable: [{
              activity: 'Mentor as a friend',
              price: '$70',
              description: 'Individual education plan, code review, consultation and support, usefull links and articles, help with resume, motivation'
            }, {
              activity: 'Online mentor',
              price: '$50',
              description: 'Individual education plan, code review, help with resume'
            }, {
              activity: 'Consulting',
              price: '$20',
              description: 'Online chat with questions / answers'
            }, {
              activity: 'Phone call',
              price: '$30 per 30 minutes',
              description: 'You can ask me for any help on the project or in your lerning program',
            }],
          },
        ]
      }
    },
  }

</script>

<style lang="sass" scoped>

  .table
    background: #fff
    width: 100%
    table-layout: fixed
    border-collapse: collapse
    &__row
      &:nth-of-type(1n)
        background: #fff
      &:nth-of-type(2n)
        background: darken(#fff, 1%)

      &--with-content
        position: relative
        opacity: 0.9
        transition: box-shadow .18s, opacity .18s
        z-index: 1
        &:hover
          opacity: 1
          box-shadow: 0 2px 12px 0 rgba(#000, 0.16)
          z-index: 2

    &__cell
      &:not(:last-child)
        padding-right: 16px
      &--header
        padding: 24px 16px
      &--body
        padding: 16px
      &--price
        text-align: center
      &_content
        padding: 24px 16px

</style>
