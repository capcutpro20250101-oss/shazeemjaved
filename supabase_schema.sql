-- ====================================================================
-- SHAZEEM JAVED PORTFOLIO — SUPABASE DATABASE SCHEMA
-- Project ID: tnqajlfwavbyntazlnwl
-- URL: https://tnqajlfwavbyntazlnwl.supabase.co
-- ====================================================================

-- 1. CREATE CONTACT MESSAGES TABLE
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) for Contact Messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit contact messages
CREATE POLICY "Allow public anonymous contact message submission" 
    ON public.contact_messages 
    FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

-- Allow authenticated users / dashboard to view messages
CREATE POLICY "Allow authenticated read contact messages" 
    ON public.contact_messages 
    FOR SELECT 
    TO authenticated 
    USING (true);


-- 2. CREATE PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    number TEXT NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    project_url TEXT,
    tech TEXT[] NOT NULL DEFAULT '{}',
    metrics JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) for Projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Allow public read projects" 
    ON public.projects 
    FOR SELECT 
    TO anon, authenticated 
    USING (true);


-- 3. CREATE SKILLS TABLE
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    badge TEXT NOT NULL,
    items TEXT[] NOT NULL DEFAULT '{}',
    description TEXT NOT NULL,
    stat TEXT NOT NULL,
    col_span TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) for Skills
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;

-- Allow public read access to skills
CREATE POLICY "Allow public read skills" 
    ON public.skills 
    FOR SELECT 
    TO anon, authenticated 
    USING (true);


-- ====================================================================
-- SEED DATA (INITIAL DATA INSERTION)
-- ====================================================================

INSERT INTO public.projects (number, title, category, description, project_url, tech, metrics) VALUES
('01', 'Ayesha & Usman', 'FASHION E-COMMERCE / META ADS', 'Full-funnel Meta Ads growth campaign engineered for a high-end luxury fashion brand. Scaled acquisition strategy across Facebook and Instagram retargeting pipelines.', 'https://ayeshaandusman.com/', ARRAY['Meta Ads', 'Shopify', 'FB Pixel', 'Retargeting', 'Google Analytics 4'], '[{"label": "TRACKED REVENUE", "value": "$111,358 (+133%)"}, {"label": "STORE SESSIONS", "value": "537K (+231%)"}, {"label": "CAMPAIGN TYPE", "value": "Full-Funnel Scaling"}]'::jsonb),
('02', 'KK Sports', 'SPORTS E-COMMERCE / ADVANTAGE+', 'Targeted Meta Advantage+ sales campaign optimization for premier sports gear retailer. Achieved high-volume customer conversion at an exceptionally low CPA.', 'https://kksports.com.pk/', ARRAY['Meta Advantage+', 'WooCommerce', 'Conversion API', 'A/B Testing'], '[{"label": "TOTAL PURCHASES", "value": "415 Orders"}, {"label": "COST PER PURCHASE", "value": "PKR 166"}, {"label": "OPTIMIZATION", "value": "Advantage+ AI"}]'::jsonb),
('03', 'Trend2Spent', 'E-COMMERCE / PERFORMANCE SCALE', 'Multi-campaign Meta Ads management scaling e-commerce sales. Direct oversight of Rs11.1M+ total ad spend across high-velocity product offerings.', 'https://trend2spent.com/', ARRAY['Meta Ads', 'Google Ads', 'Shopify', 'Audience Scaling', 'CRO'], '[{"label": "MANAGED AD SPEND", "value": "Rs11.1M+"}, {"label": "CAMPAIGNS", "value": "Multi-Network"}, {"label": "ROI STATUS", "value": "Profitable Scale"}]'::jsonb),
('04', 'Superior College', 'EDUCATION / LEAD GENERATION', 'Social media strategy, poster design, and Meta lead-gen advertising for the international scholarships program. Significantly outperformed national industry benchmarks.', NULL, ARRAY['Meta Lead Ads', 'Posters', 'Copywriting', 'Conversion Funnel'], '[{"label": "COST PER LEAD", "value": "68% Lower"}, {"label": "BENCHMARK", "value": "Meta-Verified"}, {"label": "PROGRAM", "value": "Intl Scholarships"}]'::jsonb),
('05', 'Voice of World', 'UK NONPROFIT / WEB DEVELOPMENT', 'Custom WordPress website design and development for a UK-based nonprofit organization. Fully responsive architecture, donation funnel, and accessible UI.', 'https://voiceofworld.org.uk/', ARRAY['WordPress', 'PHP', 'UI/UX Design', 'Technical SEO', 'Elementor'], '[{"label": "CLIENT REGION", "value": "United Kingdom"}, {"label": "PLATFORM", "value": "WordPress Custom"}, {"label": "TYPE", "value": "Nonprofit Portal"}]'::jsonb),
('06', 'TugOfMath', 'GAME DEVELOPMENT / MULTIPLAYER', 'Real-time multiplayer educational math game developed in Unity and Photon. Runs seamlessly in web browsers with zero downloads required.', NULL, ARRAY['Unity Engine', 'Photon Networking', 'C#', 'WebGL', 'Game Dev'], '[{"label": "NETWORKING", "value": "Photon Real-Time"}, {"label": "PLATFORM", "value": "Browser WebGL"}, {"label": "TYPE", "value": "Multiplayer Game"}]'::jsonb),
('07', 'Tech By Hadi', 'TECH E-COMMERCE / GROWTH', 'E-commerce store optimization and Meta ad campaign management. Generated massive sales volume jump and traffic multiplication.', 'https://techbyhadi.com/', ARRAY['Shopify', 'Meta Ads', 'Conversion Rate Opt', 'Analytics'], '[{"label": "SESSIONS GROWTH", "value": "+189%"}, {"label": "TRACKED SALES", "value": "PKR 104.5K"}, {"label": "ORDERS INCREASE", "value": "+500%"}]'::jsonb),
('08', 'Meerzah.pk', 'JEWELRY E-COMMERCE / BRAND SCALING', 'Performance marketing and creative strategy for online jewelry brand. Rapidly expanded brand reach and customer acquisition profitability.', NULL, ARRAY['Meta Ads', 'Instagram Growth', 'Jewelry Visuals', 'Analytics'], '[{"label": "TOTAL SALES", "value": "Rs243,934 (+51%)"}, {"label": "ROAS", "value": "High Return"}, {"label": "NICHE", "value": "Luxury Jewelry"}]'::jsonb);

ON CONFLICT DO NOTHING;
