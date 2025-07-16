#!/bin/bash

# نص صيانة الترجمات - Rolls-Royce Dubai
# الاستخدام: ./scripts/translation-maintenance.sh [command]

GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# دالة عرض المساعدة
show_help() {
    echo -e "${BLUE}🚀 أوامر صيانة الترجمات - Rolls-Royce Dubai${NC}"
    echo ""
    echo "الاستخدام:"
    echo "  ./scripts/translation-maintenance.sh [COMMAND]"
    echo ""
    echo "الأوامر المتاحة:"
    echo -e "  ${GREEN}check${NC}        - فحص اكتمال الترجمات"
    echo -e "  ${GREEN}debug${NC}        - تشخيص مشاكل الترجمة المتقدم"
    echo -e "  ${GREEN}audit-seo${NC}    - فحص namespace seo"
    echo -e "  ${GREEN}fix-seo${NC}      - إصلاح namespace seo"
    echo -e "  ${GREEN}test${NC}         - اختبار شامل للترجمات"
    echo -e "  ${GREEN}report${NC}       - إنشاء تقرير مفصل"
    echo -e "  ${GREEN}help${NC}         - عرض هذه المساعدة"
    echo ""
    echo "أمثلة:"
    echo "  ./scripts/translation-maintenance.sh check"
    echo "  ./scripts/translation-maintenance.sh fix-seo"
}

# دالة فحص الترجمات
check_translations() {
    echo -e "${BLUE}🔍 فحص اكتمال الترجمات...${NC}"
    node scripts/check-translations.js
}

# دالة التشخيص المتقدم
debug_translations() {
    echo -e "${BLUE}🔧 تشخيص مشاكل الترجمة...${NC}"
    node scripts/debug-translations.js
}

# دالة فحص SEO namespace
audit_seo() {
    echo -e "${BLUE}🔍 فحص namespace seo...${NC}"
    node scripts/fix-seo-namespaces.js --audit
}

# دالة إصلاح SEO namespace
fix_seo() {
    echo -e "${YELLOW}⚠️  هل أنت متأكد من إصلاح namespace seo؟ (y/N)${NC}"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        echo -e "${BLUE}🔧 إصلاح namespace seo...${NC}"
        node scripts/fix-seo-namespaces.js --fix
        echo -e "${GREEN}✅ تم الإصلاح بنجاح!${NC}"
    else
        echo -e "${RED}❌ تم إلغاء الإصلاح${NC}"
    fi
}

# دالة اختبار شامل
test_translations() {
    echo -e "${BLUE}🧪 اختبار شامل للترجمات...${NC}"
    echo ""
    
    echo -e "${BLUE}1️⃣ فحص اكتمال الترجمات:${NC}"
    check_translations
    echo ""
    
    echo -e "${BLUE}2️⃣ فحص namespace seo:${NC}"
    audit_seo
    echo ""
    
    echo -e "${BLUE}3️⃣ تشغيل التشخيص المتقدم:${NC}"
    debug_translations
    
    echo -e "${GREEN}✅ انتهى الاختبار الشامل${NC}"
}

# دالة إنشاء تقرير
generate_report() {
    echo -e "${BLUE}📊 إنشاء تقرير شامل...${NC}"
    
    REPORT_FILE="translation-status-$(date +%Y%m%d-%H%M%S).md"
    
    {
        echo "# تقرير حالة الترجمات - $(date)"
        echo ""
        echo "## 🔍 فحص اكتمال الترجمات"
        echo '```'
        node scripts/check-translations.js
        echo '```'
        echo ""
        echo "## 🔧 فحص namespace seo"
        echo '```'
        node scripts/fix-seo-namespaces.js --audit
        echo '```'
        echo ""
        echo "## 🧪 التشخيص المتقدم"
        echo '```'
        node scripts/debug-translations.js
        echo '```'
    } > "$REPORT_FILE"
    
    echo -e "${GREEN}✅ تم إنشاء التقرير: $REPORT_FILE${NC}"
}

# المعالج الرئيسي
case "${1:-help}" in
    check)
        check_translations
        ;;
    debug)
        debug_translations
        ;;
    audit-seo)
        audit_seo
        ;;
    fix-seo)
        fix_seo
        ;;
    test)
        test_translations
        ;;
    report)
        generate_report
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo -e "${RED}❌ أمر غير صحيح: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac 