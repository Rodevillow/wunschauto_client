<template>
  <div>
    <HomeSection />
    <CredentialsSection />
    <BenefitsSection />
  </div>
</template>

<script>
import HomeSection from "@/components/sections/HomeSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";

export default {
  components: {
    HomeSection,
    CredentialsSection,
    BenefitsSection
  }
};
</script>
