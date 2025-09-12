import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { toast } from '../hooks/use-toast'
import Navbar from '../components/Navbar'

const WriteReview = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 0,
    review: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating
    }))
    
    if (errors.rating) {
      setErrors(prev => ({
        ...prev,
        rating: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.role.trim()) {
      newErrors.role = 'Role/Title is required'
    }
    
    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating'
    }
    
    if (!formData.review.trim()) {
      newErrors.review = 'Review text is required'
    } else if (formData.review.trim().length < 10) {
      newErrors.review = 'Review must be at least 10 characters long'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors below",
        description: "All fields are required to submit your review.",
        variant: "destructive",
      })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "Review submitted successfully!",
        description: "Thank you for your feedback. Your review will be published after moderation.",
      })
      
      // Reset form
      setFormData({
        name: '',
        role: '',
        rating: 0,
        review: '',
        email: ''
      })
      
      // Navigate back to ratings page after a delay
      setTimeout(() => {
        navigate('/ratings')
      }, 2000)
      
    } catch (error) {
      toast({
        title: "Error submitting review",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const StarRating = ({ rating, onRatingChange, error }) => {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onRatingChange(star)}
              className={`w-8 h-8 transition-all duration-200 hover:scale-110 ${
                star <= rating 
                  ? 'text-yellow-500 fill-current' 
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              <svg viewBox="0 0 20 20" className="w-full h-full">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : ''}
          </span>
        </div>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 animated-gradient opacity-5" />
        
        <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <h1 className="text-4xl md:text-5xl font-bold animated-gradient bg-clip-text text-transparent mb-4">
            Share Your Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help others discover Viioom by sharing your honest feedback. Your review helps us improve and grow.
          </p>
        </div>

        {/* Review Form */}
        <Card className="bg-transparent backdrop-blur-md bg-white/5 border border-white/20 shadow-xl scroll-reveal hover:scale-[1.02] transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Write Your Review</CardTitle>
            <CardDescription>
              Tell us about your experience with Viioom. All fields are required.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating */}
              <div className="space-y-2 text-center">
                <label className="text-lg font-medium text-foreground">
                  Overall Rating *
                </label>
                <StarRating 
                  rating={formData.rating} 
                  onRatingChange={handleRatingClick}
                  error={errors.rating}
                />
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-foreground">
                    Role/Title *
                  </label>
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    placeholder="e.g., Web Developer, Designer"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={errors.role ? 'border-red-500 focus-visible:ring-red-500' : ''}
                  />
                  {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Review Text */}
              <div className="space-y-2">
                <label htmlFor="review" className="text-sm font-medium text-foreground">
                  Your Review *
                </label>
                <Textarea
                  id="review"
                  name="review"
                  placeholder="Share your experience with Viioom. What did you like? What could be improved? How has it helped you?"
                  value={formData.review}
                  onChange={handleInputChange}
                  rows={6}
                  className={`resize-none ${errors.review ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                />
                <div className="flex justify-between items-center">
                  {errors.review && <p className="text-sm text-red-500">{errors.review}</p>}
                  <p className="text-sm text-muted-foreground ml-auto">
                    {formData.review.length}/500 characters
                  </p>
                </div>
              </div>

              {/* Guidelines */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <h4 className="font-medium text-foreground">Review Guidelines</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Be honest and constructive in your feedback</li>
                  <li>• Focus on your personal experience with the platform</li>
                  <li>• Avoid spam, promotional content, or inappropriate language</li>
                  <li>• Reviews are moderated and may take 24-48 hours to appear</li>
                </ul>
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/ratings')}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="magnetic-btn animated-gradient text-primary-foreground w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Submit Review'
              )}
            </Button>
          </CardFooter>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center scroll-reveal">
          <div className="bg-transparent backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2">Why Your Review Matters</h3>
            <p className="text-muted-foreground">
              Your honest feedback helps other users make informed decisions and helps us continuously improve Viioom. 
              We appreciate every review, whether it's 5 stars or constructive criticism.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default WriteReview