<template lang="pug">
.policy
  section-hero(
    title="Privacy Policy"
    lead="Our website and applications collect certain Personal Data from our Visitors and Users. To protect your personal data, Yousign has ensured that it is fully compliant with the European general data protection regulation (GDPR) which means that you can be sure that the collected data is processed in a responsible and secure manner.\n"
  )
  section-policy
  section-cta
</template>

<script>
import hero from '@/components/ui/hero/hero'
import policyContent from '@/components/policy/policy/policy-content'
import cta from '@/components/home/cta/cta'

export default {
  components: {
    'section-hero': hero,
    'section-policy': policyContent,
    'section-cta': cta
  }
}
</script>

<style lang="scss">
.policy {
  background-color: #F3EAE5;
  padding: 246px 0 0;
  box-sizing: border-box;

  @include mobile {
    padding: vmin(100) 0 0;
  }
}
</style>
