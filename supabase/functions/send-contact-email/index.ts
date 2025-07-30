import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()
    
    // Get Mailgun API key from environment
    const MAILGUN_API_KEY = Deno.env.get('MAILGUN_API_KEY')
    const MAILGUN_DOMAIN = 'sandbox-123.mailgun.org' // You may need to update this with your actual domain
    
    if (!MAILGUN_API_KEY) {
      throw new Error('Mailgun API key not found')
    }

    // Prepare Mailgun request
    const formData = new FormData()
    formData.append('from', `${name} <noreply@${MAILGUN_DOMAIN}>`)
    formData.append('to', 'join@learngrass.com')
    formData.append('subject', subject)
    formData.append('text', `From: ${name} (${email})\n\n${message}`)
    formData.append('html', `
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `)

    // Send email via Mailgun
    const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`
      },
      body: formData
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Mailgun error:', errorText)
      throw new Error('Failed to send email')
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})