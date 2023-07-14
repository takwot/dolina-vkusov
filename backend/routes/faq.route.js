const { Router } = require("express");

const faqController = require("../controllers/FAQController");

const router = Router();

router.get("/faq", faqController.allFAQ);
router.post("/faq", faqController.addFAQ);
router.delete("/faq", faqController.deleteFaq);

module.exports = router;
